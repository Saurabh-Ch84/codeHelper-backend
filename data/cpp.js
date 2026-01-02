module.exports = [
  // --- CORE TYPES & KEYWORDS ---
  "int", "long", "long long", "float", "double", "bool", "char", "void", "auto",
  "const", "static", "unsigned", "signed", "struct", "class", "enum", "namespace",
  "template", "typename", "typedef", "using", "friend", "inline", "virtual",
  "explicit", "operator", "this", "true", "false", "nullptr", "sizeof",

  // --- CONTROL FLOW ---
  "if", "else", "for", "while", "do", "switch", "case", "default", "break",
  "continue", "return", "goto", "try", "catch", "throw",

  // --- STANDARD I/O ---
  "iostream", "cin", "cout", "endl", "cerr", "getline", "fixed", "setprecision",
  "printf", "scanf", "puts", "getchar",

  // --- DATA STRUCTURES (CONTAINERS) ---
  "vector", "string", "array", "deque", "list", "forward_list",
  "set", "multiset", "map", "multimap",
  "unordered_set", "unordered_multiset", "unordered_map", "unordered_multimap",
  "stack", "queue", "priority_queue", "pair", "tuple", "bitset",

  // --- CONTAINER METHODS (COMMON) ---
  "push_back", "pop_back", "push", "pop", "top", "front", "back", "begin", "end",
  "rbegin", "rend", "size", "empty", "clear", "resize", "reserve", "insert",
  "erase", "find", "count", "lower_bound", "upper_bound", "first", "second",
  "make_pair", "make_tuple", "emplace", "emplace_back",

  // --- ALGORITHMS & MATH ---
  "algorithm", "cmath", "math.h",
  "sort", "reverse", "max", "min", "abs", "swap", "accumulate", "gcd", "lcm",
  "binary_search", "lower_bound", "upper_bound", "next_permutation", "prev_permutation",
  "unique", "fill", "memset", "memcpy", "count", "find", "replace",
  "pow", "sqrt", "cbrt", "ceil", "floor", "round", "log", "log10", "log2",
  "sin", "cos", "tan", "asin", "acos", "atan", "hypot",

  // --- STRING MANIPULATION ---
  "substr", "length", "append", "c_str", "compare", "stoi", "stoll", "to_string",
  "isalnum", "isalpha", "isdigit", "islower", "isupper", "tolower", "toupper",

  // --- USEFUL LIMITS/MACROS ---
  "INT_MAX", "INT_MIN", "LONG_MAX", "LLONG_MAX", "LLONG_MIN",
  "bits/stdc++.h", "NULL",

  // --- MEMORY (Occasional use in Linked List/Tree problems) ---
  "new", "delete", "malloc", "free", "memset", "unique_ptr", "shared_ptr"
];