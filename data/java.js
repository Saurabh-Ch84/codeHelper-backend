module.exports = [
  // Official Java Keywords (Reserved Words)
  'abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'const',
  'continue', 'default', 'do', 'double', 'else', 'enum', 'extends', 'final', 'finally', 'float',
  'for', 'goto', 'if', 'implements', 'import', 'instanceof', 'int', 'interface', 'long', 'native',
  'new', 'package', 'private', 'protected', 'public', 'return', 'short', 'static', 'strictfp',
  'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'try', 'void',
  'volatile', 'while',

  // Contextual Keywords
  'exports', 'module', 'non-sealed', 'opens', 'permits', 'provides', 'record', 'requires',
  'sealed', 'to', 'transitive', 'uses', 'var', 'with', 'yield',

  // Literals & Common Terms
  'true', 'false', 'null', 'main',

  // --- Standard Library: java.lang ---
  'Object', 'String', 'StringBuilder', 'StringBuffer', 'System', 'Math', 'Integer', 'Double',
  'Long', 'Float', 'Boolean', 'Character', 'Byte', 'Short', 'Number', 'Class', 'ClassLoader',
  'Package', 'Process', 'ProcessBuilder', 'Runtime', 'Thread', 'ThreadGroup', 'Throwable',
  'Exception', 'RuntimeException', 'Error', 'Enum', 'Void', 'StackTraceElement', 'StrictMath',
  'Cloneable', 'Comparable', 'Runnable', 'Appendable', 'CharSequence', 'Iterable', 'Readable',
  'AutoCloseable', 'Deprecated', 'Override', 'SuppressWarnings', 'FunctionalInterface',

  // --- Standard Library: java.util ---
  'ArrayList', 'LinkedList', 'HashMap', 'HashSet', 'TreeMap', 'TreeSet', 'Vector', 'Stack',
  'Hashtable', 'Properties', 'Arrays', 'Collections', 'List', 'Map', 'Set', 'Collection',
  'Date', 'Calendar', 'GregorianCalendar', 'Random', 'UUID', 'Scanner', 'Optional', 'Objects',
  'Iterator', 'ListIterator', 'Queue', 'Deque', 'ArrayDeque', 'PriorityQueue', 'Comparator',
  'ConcurrentHashMap', 'CopyOnWriteArrayList', 'EnumMap', 'EnumSet', 'IdentityHashMap',
  'LinkedHashMap', 'LinkedHashSet', 'Timer', 'TimerTask', 'WeakHashMap', 'Locale', 'Currency',
  'Observable', 'Observer', 'StringTokenizer', 'Base64',

  // --- Standard Library: java.util.function ---
  'Function', 'Predicate', 'Consumer', 'Supplier', 'BiFunction', 'BiConsumer', 'UnaryOperator',
  'BinaryOperator',

  // --- Standard Library: java.util.stream ---
  'Stream', 'IntStream', 'LongStream', 'DoubleStream', 'Collectors', 'StreamSupport',

  // --- Standard Library: java.util.concurrent ---
  'Executor', 'ExecutorService', 'Executors', 'Future', 'Callable', 'TimeUnit', 'Semaphore',
  'CountDownLatch', 'CyclicBarrier', 'Lock', 'ReentrantLock', 'ScheduledExecutorService',
  'ThreadPoolExecutor', 'AtomicInteger', 'AtomicLong', 'CompletableFuture',

  // --- Standard Library: java.io ---
  'File', 'InputStream', 'OutputStream', 'Reader', 'Writer', 'BufferedReader', 'BufferedWriter',
  'FileReader', 'FileWriter', 'FileInputStream', 'FileOutputStream', 'PrintWriter', 'Console',
  'IOException', 'Serializable', 'PrintStream', 'DataInputStream', 'DataOutputStream',
  'ObjectInputStream', 'ObjectOutputStream', 'FileDescriptor', 'FilenameFilter', 'InputStreamReader',
  'OutputStreamWriter', 'ByteArrayInputStream', 'ByteArrayOutputStream', 'Serializable',

  // --- Standard Library: java.net ---
  'URL', 'URI', 'URLConnection', 'HttpURLConnection', 'HttpsURLConnection', 'Socket', 'ServerSocket',
  'InetAddress', 'MalformedURLException', 'URLEncoder', 'URLDecoder', 'DatagramSocket', 'DatagramPacket',

  // --- Standard Library: java.nio ---
  'ByteBuffer', 'CharBuffer', 'Files', 'Path', 'Paths', 'StandardCharsets', 'StandardOpenOption',
  'FileChannel', 'Selector', 'SocketChannel',

  // --- Standard Library: java.time ---
  'LocalDate', 'LocalTime', 'LocalDateTime', 'ZonedDateTime', 'Instant', 'Duration', 'Period',
  'DateTimeFormatter', 'ZoneId', 'OffsetDateTime', 'Clock', 'Month', 'DayOfWeek', 'Year',

  // --- Standard Library: java.text ---
  'SimpleDateFormat', 'DecimalFormat', 'NumberFormat', 'DateFormat',

  // --- Standard Library: java.math ---
  'BigDecimal', 'BigInteger', 'MathContext', 'RoundingMode',

  // --- Standard Library: java.sql ---
  'Connection', 'Statement', 'PreparedStatement', 'ResultSet', 'DriverManager', 'SQLException',
  'DataSource', 'CallableStatement', 'Date', 'Time', 'Timestamp',

  // --- Common Exception Classes ---
  'NullPointerException', 'IndexOutOfBoundsException', 'ArrayIndexOutOfBoundsException',
  'IllegalArgumentException', 'IllegalStateException', 'NumberFormatException', 'ArithmeticException',
  'ClassNotFoundException', 'InterruptedException', 'UnsupportedOperationException',
  'FileNotFoundException', 'SecurityException', 'NoSuchMethodException', 'RuntimeException',

  // --- Common Method Names ---
  'toString', 'equals', 'hashCode', 'getClass', 'clone', 'finalize', 'notify', 'notifyAll', 'wait',
  'length', 'size', 'get', 'set', 'add', 'remove', 'put', 'clear', 'isEmpty', 'contains', 'containsKey',
  'containsValue', 'substring', 'indexOf', 'lastIndexOf', 'toUpperCase', 'toLowerCase', 'trim', 'split',
  'join', 'replace', 'startsWith', 'endsWith', 'valueOf', 'parseInt', 'parseDouble', 'print', 'println',
  'start', 'run', 'sleep', 'close', 'read', 'write', 'flush', 'append', 'execute', 'submit', 'of',
  'from', 'parse', 'format', 'now', 'sort', 'stream', 'collect', 'filter', 'map', 'forEach', 'reduce',
  'findFirst', 'findAny', 'orElse', 'get', 'isPresent', 'next', 'hasNext', 'execute', 'executeQuery',
  'executeUpdate', 'commit', 'rollback',

  // --- Swing UI (Desktop) ---
  'JFrame', 'JPanel', 'JButton', 'JLabel', 'JTextField', 'JTextArea', 'JScrollPane', 'JDialog',
  'JCheckBox', 'JRadioButton', 'JComboBox', 'JList', 'JTable', 'JOptionPane', 'JMenuBar', 'JMenu',
  'JMenuItem', 'ActionListener', 'ActionEvent', 'MouseListener', 'MouseEvent', 'KeyListener', 'KeyEvent',
  'awt', 'event', 'BorderLayout', 'FlowLayout', 'GridLayout', 'Graphics', 'Color', 'Font', 'Dimension',
  'SwingUtilities',

  // --- JavaFX UI (Modern Desktop) ---
  'Application', 'Stage', 'Scene', 'Button', 'Label', 'TextField', 'Pane', 'VBox', 'HBox',
  'GridPane', 'BorderPane', 'AnchorPane', 'StackPane', 'WebView', 'Image', 'ImageView', 'Platform',

  // --- Common Logger Names ---
  'Logger', 'LoggerFactory', 'log', 'info', 'debug', 'warn', 'error', 'trace', 'slf4j', 'log4j',

  // --- Android Development ---
  'Activity', 'Fragment', 'Intent', 'Context', 'Bundle', 'View', 'TextView', 'EditText', 'ImageView',
  'RecyclerView', 'Adapter', 'ViewHolder', 'onCreate', 'findViewById', 'setOnClickListener', 'Toast',
  'Log', 'SharedPreferences', 'ViewModel', 'LiveData', 'AppCompatActivity', 'ConstraintLayout',

  // --- Spring Framework ---
  'Autowired', 'Component', 'Service', 'Repository', 'Controller', 'RestController', 'RequestMapping',
  'GetMapping', 'PostMapping', 'PutMapping', 'DeleteMapping', 'PathVariable', 'RequestParam',
  'RequestBody', 'ResponseBody', 'ResponseEntity', 'SpringBootApplication', 'Bean', 'Configuration',
  'Entity', 'Id', 'GeneratedValue', 'SpringBootTest', 'Transactional', 'JPA', 'Hibernate',
  'JdbcTemplate', 'ModelAndView', 'Security',

  // --- JUnit (Testing) ---
  'Test', 'Before', 'After', 'BeforeClass', 'AfterClass', 'assertEquals', 'assertTrue', 'assertFalse',
  'assertNotNull', 'assertNull', 'fail', 'Test', 'BeforeEach', 'AfterEach', 'DisplayName',
  'Disabled', 'assertThrows', 'Mockito', 'mock', 'when', 'verify',

  // --- Maven & Gradle (Build System) ---
  'dependency', 'plugin', 'version', 'artifactId', 'groupId', 'scope', 'build', 'dependencies',
  'implementation', 'testImplementation', 'compile', 'runtime', 'sourceCompatibility',

  // --- Servlets & JSP (Web) ---
  'HttpServlet', 'HttpServletRequest', 'HttpServletResponse', 'HttpSession', 'ServletContext',
  'doGet', 'doPost', 'Filter', 'FilterChain', 'ServletException', 'JSP', 'Servlet',

  // --- Common Design Patterns & Concepts ---
  'Singleton', 'Factory', 'Builder', 'Prototype', 'Adapter', 'Decorator', 'Proxy', 'Facade',
  'Observer', 'Strategy', 'Template', 'Visitor', 'MVC', 'DAO', 'DTO', 'Service', 'Repository',
  'POJO', 'Bean', 'API', 'JSON', 'XML', 'REST', 'SOAP', 'HTTP', 'GET', 'POST', 'PUT', 'DELETE',
  'lambda', 'generic', 'reflection', 'serialization', 'concurrency', 'multithreading', 'JVM',
  'JDK', 'JRE', 'classpath', 'jar', 'war', 'ear', 'GC', 'garbage', 'collection', 'heap', 'stack',
];