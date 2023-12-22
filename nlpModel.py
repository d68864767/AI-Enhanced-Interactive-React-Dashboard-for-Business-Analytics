```python
# Import necessary libraries
import spacy
from spacy import displacy
from collections import Counter
import en_core_web_sm
import pickle

# Load English tokenizer, tagger, parser, NER and word vectors
nlp = en_core_web_sm.load()

# Function to process text
def process_text(text):
    # Parse the text with spaCy
    doc = nlp(text)

    # Analyze syntax
    noun_phrases = [chunk.text for chunk in doc.noun_chunks]
    verbs = [token.lemma_ for token in doc if token.pos_ == "VERB"]

    # Named entities, phrases and concepts
    named_entities = [(X.text, X.label_) for X in doc.ents]

    return {'noun_phrases': noun_phrases, 'verbs': verbs, 'entities': named_entities}

# Function to respond to query
def respond_to_query(query):
    # Process the query
    result = process_text(query)

    # Check for specific keywords and respond accordingly
    if 'sales' in result['noun_phrases'] and 'next quarter' in result['noun_phrases']:
        # Load the predictive model
        model = pickle.load(open('sales_prediction_model.pkl', 'rb'))

        # Predict sales for the next quarter
        # Note: Replace 'your_features' with the actual features for the next quarter
        your_features = [2022, 4, 1, 100, 0.05]  # Example features
        prediction = model.predict([your_features])

        return f"The sales forecast for the next quarter is {prediction[0]}."

    else:
        return "Sorry, I didn't understand that. Please try again."

# Test the function
print(respond_to_query("Show sales forecast for next quarter"))
```
