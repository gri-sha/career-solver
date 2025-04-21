# script generated from juputer notebook

import os
import joblib
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.decomposition import PCA
from sklearn.ensemble import RandomForestRegressor, RandomForestClassifier
from sklearn.svm import LinearSVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.multioutput import MultiOutputRegressor
from sklearn.linear_model import ElasticNet, Ridge


SEED = 1134
np.random.seed(SEED)

df = pd.read_csv("predict/data/education_career_success.csv")

df["high_school_gpa"] = df["high_school_gpa"] / 4.0
df["sat_score"] = df["sat_score"] / 1600
df["university_gpa"] = df["university_gpa"] / 4.0
df["university_ranking"] = df["university_ranking"] / 1000

df.drop(["student_id"], axis=1, inplace=True)


X = df.drop(
    [
        "starting_salary",
        "career_satisfaction",
        "years_to_promotion",
        "work_life_balance",
        "entrepreneurship",
    ],
    axis=1,
)

y_reg = df[
    [
        "starting_salary",
        "career_satisfaction",
        "years_to_promotion",
        "work_life_balance",
    ]
]
y_class = df[["entrepreneurship"]]

X_train, X_test, y_reg_train, y_reg_test, y_class_train, y_class_test = (
    train_test_split(X, y_reg, y_class, test_size=0.2)
)

numeric_features = X.select_dtypes(include=["int64", "float64"]).columns
numeric_transformer = Pipeline(steps=[("scaler", StandardScaler())])

categorical_features = X.select_dtypes(include=["object"]).columns
categorical_transformer = Pipeline(steps=[("onehot", OneHotEncoder())])

preprocessor = ColumnTransformer(
    transformers=[
        ("num", numeric_transformer, numeric_features),
        ("cat", categorical_transformer, categorical_features),
    ]
)

reg_models = {
    "RandomForest": RandomForestRegressor(n_estimators=100, random_state=SEED),
    "ElasticNet": ElasticNet(random_state=SEED),
    "Ridge": Ridge(random_state=SEED),
}

class_models = {
    "LinearSVC": LinearSVC(class_weight="balanced", random_state=SEED, max_iter=10000),
    "KNN": KNeighborsClassifier(),
    "RandomForest": RandomForestClassifier(n_estimators=100, random_state=SEED),
}

best_reg_model = ElasticNet(random_state=SEED)
best_reg_pipeline = Pipeline(
    steps=[
        ("preprocessor", preprocessor),
        ("pca", PCA(n_components=0.95)),
        ("regressor", MultiOutputRegressor(best_reg_model)),
    ]
)
best_reg_pipeline.fit(X_train, y_reg_train)

best_class_model = RandomForestClassifier(n_estimators=100, random_state=SEED)
best_class_pipeline = Pipeline(
    steps=[
        ("preprocessor", preprocessor),
        ("pca", PCA(n_components=0.95)),
        ("classifier", best_class_model),
    ]
)
best_class_pipeline.fit(X_train, y_class_train.values.ravel())

os.makedirs("models", exist_ok=True)
os.makedirs("features", exist_ok=True)

joblib.dump(list(X.columns), "features/input_features.pkl")
joblib.dump(list(y_reg.columns), "features/num_out_features.pkl")
joblib.dump(list(y_class.columns), "features/cat_out_features.pkl")

joblib.dump(best_reg_pipeline, "models/reg_model.pkl")
joblib.dump(best_class_pipeline, "models/class_model.pkl")
