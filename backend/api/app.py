from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
import logging
import joblib
import json
import os

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])
logging.basicConfig(level=logging.DEBUG)

reg_model = joblib.load('predict/models/reg_model.pkl')
class_model = joblib.load('predict/models/class_model.pkl')
input_features = joblib.load('predict/features/input_features.pkl')
num_out_features = joblib.load('predict/features/num_out_features.pkl')
cat_out_features = joblib.load('predict/features/cat_out_features.pkl')

print(input_features)

with open('predict/features/feature_types.json') as f:
    feature_types = json.load(f)

with open('predict/data/income_by_country.json') as f:
    incomes = json.load(f)


type_map = {
    "int": int,
    "float": float,
    "str": str,
    # "bool": bool
}

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    logging.info(f"Received data: {data}")
    if not data:
        logging.warning("No data provided in request")
        return jsonify({'error': 'No data provided'}), 400

    try:
        # arrange input in correct feature order
        input_data = []
        for feature in input_features:
            value = data[feature]
            data_type = type_map[feature_types[feature]]
            input_data.append(data_type(value))

        input_df = pd.DataFrame([input_data], columns=input_features)

        reg_pred = reg_model.predict(input_df)
        class_pred = class_model.predict(input_df)

        # format output as dicts with feature names
        res = {}

        for i, feature in enumerate(num_out_features):
            res[feature] = reg_pred[0][i]  # 2d array
        for i, feature in enumerate(cat_out_features):
            res[feature] = class_pred[i]  # there is only 1 categotical output feature, so there is no 2d array
        
        # the convertion from numpy types is not needed, it is automatic
        for k, v in res.items():
            res[k] = round(v.item()) if isinstance(v, np.float64) else v

        # we will send bool instead of str
        res["entrepreneurship"] = False if res["entrepreneurship"] == "No" else True

        # adjust the salary prediction by country
        res["starting_salary"] = res["starting_salary"] / incomes["United States"] * incomes[data["country"]]

        logging.info(f"Prediction result: {res}")
        return jsonify(res)

    except Exception as e:
        logging.exception(f"Error during prediction: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)