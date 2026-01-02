module.exports = [
  // --- Core Keywords ---
  "public", "private", "protected", "static", "final", "void", "class", "interface", "enum",
  "extends", "implements", "new", "this", "super", "return", "if", "else", "switch", "case",
  "default", "break", "continue", "for", "while", "do", "try", "catch", "finally", "throw",
  "throws", "package", "import", "boolean", "int", "long", "double", "char", "float", "byte",
  "null", "true", "false", "instanceof", "var",

  // --- Core Classes (java.lang) ---
  "System", "String", "StringBuilder", "StringBuffer", "Math", "Object", "Class",
  "Integer", "Long", "Double", "Character", "Boolean", "Thread", "Runnable", "Comparable",

  // --- Collections Framework (CRITICAL) ---
  "java.util", "Arrays", "Collections",
  "List", "ArrayList", "LinkedList", "Vector", "Stack",
  "Set", "HashSet", "TreeSet", "LinkedHashSet",
  "Map", "HashMap", "TreeMap", "LinkedHashMap",
  "Queue", "PriorityQueue", "Deque", "ArrayDeque",
  "Iterator", "ListIterator", "Optional", "Comparator",

  // --- I/O (Fast I/O & Standard) ---
  "Scanner", "BufferedReader", "InputStreamReader", "PrintWriter", "StringTokenizer",
  "System.out.println", "System.in", "IOException",

  // --- Big Math (CP Essentials) ---
  "BigInteger", "BigDecimal", "java.math",

  // --- Common Methods (Autocomplete Triggers) ---
  "length", "size", "length()", "size()", "charAt", "substring", "toString", "equals",
  "add", "remove", "get", "set", "put", "contains", "containsKey", "containsValue",
  "isEmpty", "clear", "clone", "toCharArray", "trim", "split", "indexOf", "lastIndexOf",
  "toUpperCase", "toLowerCase", "valueOf", "parseInt", "parseLong", "parseDouble",
  "sort", "fill", "binarySearch", "copyOf", "copyOfRange", "asList", "stream",

  // --- Streams & Functional (Modern Java) ---
  "Stream", "Collectors", "IntStream", "filter", "map", "reduce", "forEach", "collect",
  "Function", "Predicate", "Consumer", "Supplier",

  // --- Common Exceptions ---
  "Exception", "RuntimeException", "NullPointerException", "ArrayIndexOutOfBoundsException",
  "IllegalArgumentException", "InterruptedException"
];