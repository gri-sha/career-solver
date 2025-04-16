from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import joblib
import json
import os

app = Flask(__name__)

print(os.getcwd())

reg_model = joblib.load('backend/predict/models/reg_model.pkl')
class_model = joblib.load('backend/predict/models/class_model.pkl')
input_features = joblib.load('backend/predict/features/input_features.pkl')
num_out_features = joblib.load('backend/predict/features/num_out_features.pkl')
cat_out_features = joblib.load('backend/predict/features/cat_out_features.pkl')

with open('backend/predict/features/feature_types.json') as f:
    feature_types = json.load(f)


type_map = {
    "int": int,
    "float": float,
    "str": str
}

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    if not data:
        return jsonify({'error': 'No data provided'}), 400

    try:
        # arrange input in correct feature order
        processed_data = []
        for feature in input_features:
            value = data[feature]
            data_type = type_map[feature_types[feature]]
            processed_data.append(data_type(value))

        input_df = pd.DataFrame([processed_data], columns=input_features)

        reg_pred = reg_model.predict(input_df)
        class_pred = class_model.predict(input_df)

        # format output as dicts with feature names
        res = {}

        for i, feature in enumerate(num_out_features):
            res[feature] = reg_pred[0][i]  # 2d array
        for i, feature in enumerate(cat_out_features):
            res[feature] = class_pred[i]  # there is only 1 categotical output feature, so there is no 2d array
        
        # the convertion from numpy types is not needed, it is automatic
        # for k, v in res.items():
        #     res[k] = round(v.item()) if type(v.item()) == float else v.item()

        return jsonify(res)

    except KeyError as e:
        return jsonify({'error': f'Missing input feature: {e}'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
