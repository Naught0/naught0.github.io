# Making Combinator

> Get an overview of what combos, infinite loops, and shenanigans are inside your Magic: The Gathering deck.

![](/combinator.webp)

---

[Combinator](https://mtgcombinator.com) is a tool to see what combos a Magic: The Gathering (MTG) deck contains. A combo is typically 2 or more cards which, when played together, will interact to form an often infinite loop, winning the game or putting you absurdly ahead.

When I began making Combinator, there was no easy way to find combos in a given deck list from any of the most popular deck-building websites. [EDHREC](https://edhrec.com/) is great, but it wasn't exactly what I wanted. I needed a website that let me quickly discern what combinations of cards I should or could assemble while I was playing.

I also **suck** at MTG, so I definitely wanted to include the steps for executing some of the more elaborate combos.

## Assembling the Wombo Combo

The first thing I needed was a way to determine which MTG cards result in infinite combos when played together.

Luckily, as with most things, someone has already solved that problem for me. [Commander Spellbook](https://commanderspellbook.com/) contains tens of thousands of MTG combos submitted by the community. They previously shipped their entire database of combos as part of their frontend bundle in a big blob of JSON. I loaded this blob into [pandas](https://pandas.pydata.org/) to do the card-crunching.

The logic for finding combos looked something like this:

```py
def find_matches(data: list[dict], to_match: set[str]):
    """Finds combos in a given decklist based on card names"""
    db = pd.DataFrame(data)
    return {
        "combos": db[
            db["c"].apply(lambda x: set(x).issubset(to_match))
        ].to_dict("records")
    }
```

This checks the entire database of combos against the cards in the supplied deck.

Et voila, I now have all combinations of cards which occur in the database that are also present in our deck. This operation isn't exactly efficient, but it works reasonably well for a DB which contains 30,000+ combos when checked against 60+ card decks.

### The Great Changening

Sometime around the beginning of 2024 Commander Spellbook revamped their site. They no longer provide their entire database so freely (a boon to page load times I'm sure), so I had to start using their newly created API instead.

The latest version of Combinator sends a list of cards to the Commander Spellbook API and parses the results to get roughly the same output as before.

```py
@router.post("/combo", response_model=Results)
def combo_search(data: ComboSearchPayload):
    return requests.get(
        "https://backend.commanderspellbook.com/find-my-combos",
        json=data.model_dump(mode="json"),
    ).json()["results"]
```

And it isn't any faster than when we did the calculations ourselves! Oh well.


## Stack Summary

The site has evolved over time, but generally I'm using python for the backend and React for the frontend.

**Backend**: Flask (now FastAPI), Pandas

**Frontend**: React (originally [CRA](https://create-react-app.dev/) but moved to [Vite](https://vitejs.dev/)), Bulma CSS (later, a combo of Bulma + Tailwind)

## Hosting

I originally hosted the site entirely on Google Cloud Run. This meant that the python app was serving the React frontend only after a container cold start, which meant multiple seconds of loading before the site was displayed. To resolve this, I moved the frontend to Cloudflare Pages which gets instantly served for free. The python API is still hosted on Google Cloud Run.


## A Brief Tour

You can search for your [Moxfield](https://moxfield.com) username, filter your decks, and click on any to get a list of combos it contains. You can also search with a link to a deck from Moxfield, [Archidekt](https://archidekt.com) or [MTG Goldfish](https://www.mtggoldfish.com/).

![](/combinator-user-search.webp)

Once you've selected a deck, the required cards for the combo are on the left, the effects of the combo on the right. You can click the combo to see a detailed list of steps and prerequisites.

<video controls>
  <source src="/combinator.mp4" type="video/mp4">
</video>

Click the "Add 1" tab to see combos that could be added to your list with the addition of a single card.

![](/combinator-add-one.webp)

Finally, need to quickly find which cards say "infect" in your deck? You can search the titles and text of cards in your deck too.

![](/combinator-search.webp)

## Conclusion

My friends and I use this site almost every time we play MTG, which is extremely gratifying. I am always iterating on the UI, and I usually have a dozen ideas bouncing around at once. Eventually, I may forgo the python API (which costs me a whopping $0.05/mo from Google) and use Cloudflare Workers for completely free hosting.

See the live site at [mtgcombinator.com](https://mtgcombinator.com)

[Check out the source on Github](https://github.com/naught0/combinator)
