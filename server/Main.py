import warnings
import pymongo
import pandas as pd
import matplotlib.pyplot as plt
import os

warnings.filterwarnings('ignore')

client = pymongo.MongoClient(
    "mongodb+srv://readWriteUser:readWriteUserPassword@cluster0.uynjiyk.mongodb.net/code_snippets_library")

db = client['code_snippets_library']
coll = db['snippets']

query = {}
projection = {"title": 1,
              "language": 1,
              "snippetCount": 1,
              '_id': 0}
cur = coll.find(query, projection)

df = pd.DataFrame(list(cur))


def save_title_vs_count_plot():
    x = df["title"]
    y = df["snippetCount"]
    plt.figure(figsize=(10, 10))
    plt.ylim((0, 10))
    plt.bar(x, y, width=0.5)

    # for i, title in enumerate(x):
    #     plt.text(i, y[i], title, ha='center', va='center', rotation=90)

    plt.xlabel('Title')
    plt.ylabel('Snippet Count')
    plt.xticks(rotation=90)
    plt.tight_layout()
    plt.savefig('title_vs_count_plot.png')


def save_language_vs_count_plot():
    x = df["language"]
    y = df["snippetCount"]
    plt.figure(figsize=(10, 10))
    plt.ylim((0, 10))
    plt.bar(x, y, width=0.5)

    # for i, title in enumerate(x):
    #     plt.text(i, y[i], title, ha='center', va='center', rotation=90)

    plt.xlabel('Languages')
    plt.ylabel('Snippet Count')
    plt.xticks(rotation=90)
    plt.tight_layout()
    plt.savefig('language_vs_count_plot.png')


# Delete previously generated plot files
def delete_existing_plots():
    try:
        os.remove('title_vs_count_plot.png')
        os.remove('language_vs_count_plot.png')
    except FileNotFoundError:
        pass


# Main function to execute the script
def main():
    delete_existing_plots()
    save_title_vs_count_plot()
    save_language_vs_count_plot()


if __name__ == "__main__":
    main()
