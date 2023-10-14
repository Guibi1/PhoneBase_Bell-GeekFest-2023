export default function generatePrivateKey() {
    const words: string[] = [];

    for (let i = 0; i < 4; i++) {
        words.push(wordlist[Math.floor(Math.random() * wordlist.length)]);
    }

    return words;
}

const wordlist = [
    "online",
    "first",
    "click",
    "price",
    "people",
    "state",
    "email",
    "health",
    "world",
    "music",
    "system",
    "number",
    "video",
    "public",
    "school",
    "review",
    "order",
    "hotel",
    "center",
    "store",
    "travel",
    "report",
    "member",
    "office",
    "design",
    "posted",
    "within",
    "phone",
    "family",
    "black",
    "index",
    "women",
    "today",
    "south",
    "county",
    "photo",
    "three",
    "total",
    "place",
    "north",
    "media",
    "water",
    "board",
    "white",
    "small",
    "image",
    "title",
    "money",
    "source",
    "author",
    "print",
    "canada",
    "stock",
    "credit",
    "point",
    "thread",
    "large",
    "table",
    "market",
    "action",
    "start",
    "model",
    "human",
    "second",
    "movie",
    "march",
    "friend",
    "server",
    "study",
    "staff",
    "again",
    "april",
    "street",
    "topic",
    "person",
    "below",
    "mobile",
    "party",
    "login",
    "legal",
    "recent",
    "memory",
    "social",
    "august",
    "quote",
    "story",
    "create",
    "young",
    "field",
    "paper",
    "single",
    "night",
    "poker",
    "audio",
    "light",
    "offer",
    "event",
    "china",
    "month",
    "major",
    "future",
    "space",
    "london",
    "child",
    "garden",
    "energy",
    "notice",
    "radio",
    "color",
    "track",
    "format",
    "safety",
    "trade",
    "david",
    "green",
    "close",
    "common",
    "drive",
    "living",
    "short",
    "daily",
    "beach",
    "period",
    "window",
    "france",
    "region",
    "island",
    "record",
    "direct",
    "style",
    "front",
    "update",
    "early",
    "sound",
    "either",
    "final",
    "adult",
    "thing",
    "centre",
    "cheap",
    "third",
    "europe",
    "cover",
    "global",
    "player",
    "watch",
    "though",
    "linux",
    "weight",
    "heart",
    "error",
    "camera",
    "clear",
    "domain",
    "beauty",
    "india",
    "simple",
    "quick",
    "friday",
    "whole",
    "annual",
    "later",
    "basic",
    "google",
    "church",
    "method",
    "death",
    "speed",
    "brand",
    "higher",
    "yellow",
    "stuff",
    "french",
    "japan",
    "doing",
    "entry",
    "nature",
    "africa",
    "growth",
    "agency",
    "monday",
    "income",
    "force",
    "river",
    "engine",
    "album",
    "double",
    "build",
    "screen",
    "season",
    "sunday",
    "casino",
    "volume",
    "silver",
    "inside",
    "mature",
    "supply",
    "lower",
    "union",
    "robert",
    "advice",
    "woman",
    "middle",
    "cable",
    "object",
    "score",
    "client",
    "follow",
    "sample",
    "flash",
    "george",
    "choice",
    "artist",
    "letter",
    "summer",
    "allow",
    "degree",
    "button",
    "super",
    "matter",
    "custom",
    "almost",
    "asian",
    "editor",
    "female",
    "cancer",
    "reason",
    "spring",
    "answer",
    "voice",
    "police",
    "brown",
    "happy",
    "sport",
    "ready",
    "animal",
    "mexico",
    "secure",
    "simply",
    "option",
    "master",
    "valley",
    "blood",
    "earth",
    "nokia",
    "impact",
    "strong",
    "ground",
    "italy",
    "award",
    "ensure",
    "extra",
    "budget",
    "rated",
    "amazon",
    "horse",
    "owner",
    "retail",
    "bring",
    "mother",
    "joined",
    "input",
    "agent",
    "valid",
    "modern",
    "senior",
    "grand",
    "trial",
    "normal",
    "entire",
    "metal",
    "output",
    "guest",
    "trust",
    "indian",
    "grade",
    "dating",
    "filter",
    "longer",
    "behind",
    "panel",
    "floor",
    "german",
    "buying",
    "match",
    "plant",
    "string",
    "target",
    "spain",
    "winter",
    "youth",
    "boston",
    "russia",
    "golden",
    "senate",
    "funny",
    "joseph",
    "lawyer",
    "portal",
    "brian",
];
