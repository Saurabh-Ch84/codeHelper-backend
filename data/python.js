module.exports = [
  // --- Keywords & Control Flow ---
  "def", "class", "return", "if", "elif", "else", "for", "while", "break", "continue",
  "try", "except", "finally", "raise", "assert", "with", "as", "import", "from",
  "global", "nonlocal", "lambda", "yield", "async", "await", "pass", "in", "is",
  "and", "or", "not", "True", "False", "None",

  // --- Built-in Types & Functions ---
  "int", "float", "str", "bool", "list", "dict", "set", "tuple", "bytes",
  "print", "input", "len", "range", "enumerate", "zip", "map", "filter", "sorted",
  "sum", "max", "min", "abs", "round", "pow", "divmod", "all", "any",
  "id", "type", "isinstance", "issubclass", "super", "open", "help", "dir",
  "str", "repr", "chr", "ord", "bin", "hex", "oct",

  // --- Essential Data Structures (collections) ---
  "collections", "defaultdict", "deque", "Counter", "namedtuple", "OrderedDict",

  // --- Math & Algorithms ---
  "math", "math.ceil", "math.floor", "math.sqrt", "math.pow", "math.log", "math.log10",
  "math.pi", "math.inf", "math.gcd", "math.factorial", "math.comb", "math.perm",
  "random", "random.randint", "random.choice", "random.shuffle", "random.sample",
  "itertools", "permutations", "combinations", "product", "accumulate", "groupby",
  "functools", "lru_cache", "reduce", "cmp_to_key",
  "heapq", "heappush", "heappop", "heapify", "nlargest", "nsmallest", // Crucial for CP
  "bisect", "bisect_left", "bisect_right", "insort", // Crucial for CP

  // --- System & I/O ---
  "sys", "sys.stdin", "sys.stdout", "sys.setrecursionlimit", "sys.maxsize", "sys.argv", "sys.exit",
  "os", "os.path", "os.getcwd", "os.listdir", "os.system", "os.environ",

  // --- String & Regex ---
  "re", "re.search", "re.match", "re.findall", "re.sub", "re.split",
  "split", "join", "strip", "replace", "lower", "upper", "startswith", "endswith",

  // --- Modern Type Hinting (Interview Standard) ---
  "typing", "List", "Dict", "Set", "Tuple", "Optional", "Union", "Callable", "Any",

  // --- Common Libraries (Lightweight references only) ---
  "json", "json.loads", "json.dumps",
  "datetime", "datetime.now", "timedelta",
  "copy", "deepcopy",
  "requests", "requests.get", "requests.post", // Web basics
  "numpy", "pandas" // Just the imports, not the entire API
];