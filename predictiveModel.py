```python
# Import necessary libraries
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn import metrics
import pickle

# Load the data from the database
# Note: Replace 'your_database' and 'your_collection' with your actual database and collection names
from pymongo import MongoClient
client = MongoClient('mongodb://localhost:27017/')
db = client['your_database']
collection = db['your_collection']
data = pd.DataFrame(list(collection.find()))

# Preprocess the data
data['date'] = pd.to_datetime(data['date'])
data['year'] = data['date'].dt.year
data['month'] = data['date'].dt.month
data['day'] = data['date'].dt.day

# Define the features and the target
features = ['year', 'month', 'day', 'customerEngagement', 'marketChanges']
target = ['sales']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(data[features], data[target], test_size=0.2, random_state=0)

# Train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Evaluate the model
y_pred = model.predict(X_test)
print('Mean Absolute Error:', metrics.mean_absolute_error(y_test, y_pred))
print('Mean Squared Error:', metrics.mean_squared_error(y_test, y_pred))
print('Root Mean Squared Error:', np.sqrt(metrics.mean_squared_error(y_test, y_pred)))

# Save the model for later use
pickle.dump(model, open('sales_prediction_model.pkl', 'wb'))
```
