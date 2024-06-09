# Combinator

> Get an overview of what combos, infinite loops, and shenanigans are inside your Magic: The Gathering deck.

---

Combinator is a tool to see what combos a Magic: The Gathering (MTG) deck contains.

When I began making Combinator, there was no great way to find combos in an arbitrary collection of cards other than using [EDHREC](https://edhrec.com/). I wanted a website that I could shrink down to a small portion of my screen and quickly discern what combinations of cards I should or could assemble. 

I also **suck** at MTG, so I definitely wanted to include the steps for executing some of the more elaborate combos.

## Tech

The site has evolved a few times, but generally I'm using python for the backend and React for the frontend.

**Backend**: Flask (later FastAPI), Pandas

**Frontend**: React, Bulma CSS (later Tailwind)

## Assembling the Wombo Combo

In order to accomplish any of this, I first needed a way to determine which MTG cards result in infinite combos so that any list of cards can be compared to it.

Luckily, as with most things, someone has already solved that problem for me. [Commander Spellbook](https://commanderspellbook.com/) contains tens of thousands of MTG combos submitted by the community. They previously shipped the entire database of combos as part of their frontend bundle. I used a cached copy of this database and created a pandas dataframe from it on the server.

The logic for finding combos looked something like this:

```py
def find_matches(
    data: list[dict], to_match: set[str], identity: list[str]
):
    """Finds combos in a given decklist based on card names"""
    identity = set(identity)
    db = pd.DataFrame(data)
    return {
        "combos": db[
            db["c"].apply(lambda x: set(x).issubset(to_match))
        ].to_dict("records")
    }
```

This checks the entire database of combos against the supplied deck.

Et voila, we now have all combinations of cards which occur in the database that are also present in our deck. This operation isn't exactly efficient, but it works reasonably well for a 30,000+ combo DB when checked against 100-card decks.

Sometime around the beginning of 2024, Commander Spellbook revamped their site, and their frontend became an API consumer. This meant I was no longer able to keep an updated list of combos, so I too became a consumer of their API, removing the need for pandas and any meaningful data crunching on the server.

![](/mtgCombinator.png)

