from textblob import TextBlob
import sys

def analyze_sentiment(text):
    analysis = TextBlob(text)
    return analysis.sentiment.polarity

text = sys.argv[1]
sentiment_score = analyze_sentiment(text)
print(sentiment_score)
