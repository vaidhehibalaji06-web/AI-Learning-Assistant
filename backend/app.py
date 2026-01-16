from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/attention", methods=["POST"])
def attention():
    data = request.json
    time_spent = data["time"]
    scrolls = data["scrolls"]

    # Simple attention score
    score = (time_spent * 2) + (scrolls * 5)

    if score < 40:
        level = "LOW"
    elif score < 70:
        level = "MEDIUM"
    else:
        level = "HIGH"

    return jsonify({"level": level})

if __name__ == "__main__":
    app.run()
