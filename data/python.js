module.exports= [
  // --- Keywords ---
  'False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class',
  'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global',
  'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise',
  'return', 'try', 'while', 'with', 'yield',

  // --- Built-in Functions & Types ---
  'abs', 'all', 'any', 'ascii', 'bin', 'bool', 'breakpoint', 'bytearray', 'bytes', 'callable',
  'chr', 'classmethod', 'compile', 'complex', 'delattr', 'dict', 'dir', 'divmod', 'enumerate',
  'eval', 'exec', 'filter', 'float', 'format', 'frozenset', 'getattr', 'globals', 'hasattr',
  'hash', 'help', 'hex', 'id', 'input', 'int', 'isinstance', 'issubclass', 'iter', 'len',
  'list', 'locals', 'map', 'max', 'memoryview', 'min', 'next', 'object', 'oct', 'open',
  'ord', 'pow', 'print', 'property', 'range', 'repr', 'reversed', 'round', 'set', 'setattr',
  'slice', 'sorted', 'staticmethod', 'str', 'sum', 'super', 'tuple', 'type', 'vars', 'zip',

  // --- Common "Dunder" (Double Underscore) Methods & Attributes ---
  '__init__', '__str__', '__repr__', '__len__', '__getitem__', '__setitem__', '__delitem__',
  '__iter__', '__next__', '__contains__', '__call__', '__enter__', '__exit__', '__eq__',
  '__ne__', '__lt__', '__gt__', '__le__', '__ge__', '__add__', '__sub__', '__mul__',
  '__truediv__', '__floordiv__', '__mod__', '__pow__', '__name__', '__main__', '__dict__',
  '__doc__', '__module__', '__class__', '__slots__', '__annotations__',

  // --- Common Exception Names ---
  'Exception', 'ValueError', 'TypeError', 'KeyError', 'IndexError', 'AttributeError', 'NameError',
  'FileNotFoundError', 'IOError', 'ImportError', 'ModuleNotFoundError', 'StopIteration',
  'ZeroDivisionError', 'AssertionError', 'KeyboardInterrupt', 'MemoryError', 'NotImplementedError',
  'SyntaxError', 'IndentationError', 'RuntimeError', 'SystemExit', 'ConnectionError', 'TimeoutError',

  // --- Common Standard Library Modules & Functions ---
  // os & sys
  'os', 'sys', 'os.path', 'os.path.join', 'os.path.exists', 'os.path.isdir', 'os.path.isfile',
  'os.listdir', 'os.getcwd', 'os.chdir', 'os.mkdir', 'os.makedirs', 'os.remove', 'os.rename',
  'os.environ', 'os.getenv', 'os.system', 'sys.argv', 'sys.exit', 'sys.path', 'sys.version',
  // datetime & time
  'datetime', 'date', 'time', 'timedelta', 'now', 'utcnow', 'strptime', 'strftime', 'today',
  'time.sleep', 'time.time',
  // json
  'json', 'json.load', 'json.loads', 'json.dump', 'json.dumps',
  // re (Regular Expressions)
  're', 're.compile', 're.search', 're.match', 're.findall', 're.sub', 're.split', 're.IGNORECASE',
  // collections
  'collections', 'defaultdict', 'Counter', 'deque', 'namedtuple', 'OrderedDict',
  // math
  'math', 'math.sqrt', 'math.pow', 'math.ceil', 'math.floor', 'math.sin', 'math.cos', 'math.tan',
  'math.pi', 'math.e', 'math.log', 'math.exp',
  // random
  'random', 'random.random', 'random.randint', 'random.choice', 'random.shuffle', 'random.uniform',
  // argparse & logging
  'argparse', 'ArgumentParser', 'add_argument', 'parse_args', 'logging', 'basicConfig',
  'getLogger', 'info', 'debug', 'warning', 'error', 'critical',
  // other common modules
  'itertools', 'functools', 'operator', 'pathlib', 'Path', 'pickle', 'shutil', 'subprocess',
  'threading', 'multiprocessing', 'urllib', 'http', 'unittest', 'copy', 'deepcopy', 'glob',

  // --- Common Concepts & Variable Names ---
  'self', 'cls', 'args', 'kwargs', 'request', 'response', 'app', 'db', 'session', 'user', 'data',
  'result', 'file', 'path', 'url', 'config', 'params', 'headers', 'payload', 'context', 'template',

  // --- Data Science & Machine Learning ---
  // NumPy
  'numpy', 'np', 'np.array', 'np.arange', 'np.zeros', 'np.ones', 'np.linspace', 'np.random',
  'np.shape', 'np.reshape', 'np.dot', 'np.mean', 'np.std', 'np.sum', 'np.min', 'np.max', 'np.ndarray',
  'np.sqrt', 'np.exp', 'np.log', 'np.vstack', 'np.hstack', 'np.eye', 'np.nan',
  // Pandas
  'pandas', 'pd', 'pd.DataFrame', 'pd.Series', 'pd.read_csv', 'pd.read_excel', 'pd.to_datetime',
  'df.head', 'df.tail', 'df.describe', 'df.info', 'df.shape', 'df.columns', 'df.index', 'df.values',
  'df.loc', 'df.iloc', 'df.groupby', 'df.sort_values', 'df.merge', 'df.concat', 'df.apply',
  'df.to_csv', 'df.to_excel', 'df.isnull', 'df.dropna', 'df.fillna', 'df.pivot_table',
  // Matplotlib & Seaborn
  'matplotlib', 'pyplot', 'plt', 'plt.show', 'plt.plot', 'plt.scatter', 'plt.bar', 'plt.hist',
  'plt.xlabel', 'plt.ylabel', 'plt.title', 'plt.figure', 'plt.subplot', 'plt.legend',
  'seaborn', 'sns', 'sns.lineplot', 'sns.scatterplot', 'sns.heatmap', 'sns.boxplot',
  // Scikit-learn
  'sklearn', 'model_selection', 'train_test_split', 'linear_model', 'LinearRegression', 'LogisticRegression',
  'tree', 'DecisionTreeClassifier', 'ensemble', 'RandomForestClassifier', 'svm', 'SVC', 'neighbors',
  'KNeighborsClassifier', 'metrics', 'accuracy_score', 'confusion_matrix', 'classification_report',
  'preprocessing', 'StandardScaler', 'MinMaxScaler', 'fit', 'predict', 'transform', 'fit_transform',

  // --- Web Development ---
  // Requests
  'requests', 'requests.get', 'requests.post', 'requests.put', 'requests.delete', 'requests.head',
  'requests.options', 'response.status_code', 'response.json', 'response.text', 'response.content',
  'response.headers',
  // Flask
  'flask', 'Flask', 'render_template', 'request', 'jsonify', 'redirect', 'url_for', 'session', 'g',
  'app.route', 'Blueprint', 'abort', 'send_from_directory',
  // Django
  'django', 'models', 'views', 'urls', 'admin', 'settings', 'manage.py', 'HttpRequest', 'HttpResponse',
  'render', 'get_object_or_404', 'Model', 'CharField', 'IntegerField', 'TextField', 'DateTimeField',
  'ForeignKey', 'ManyToManyField', 'OneToOneField', 'objects.all', 'objects.filter', 'objects.get',
  'objects.create', 'forms', 'Form', 'ModelForm', 'contrib', 'auth', 'User', 'TemplateView', 'ListView',
  'DetailView', 'CreateView', 'UpdateView', 'DeleteView', 'urlpatterns', 'path',

  // --- Other Popular Libraries ---
  // SQLAlchemy
  'sqlalchemy', 'create_engine', 'Column', 'Integer', 'String', 'MetaData', 'Table', 'Session',
  'declarative_base', 'sessionmaker', 'query',
  // Pillow (PIL)
  'PIL', 'Image', 'Image.open', 'Image.save', 'Image.resize', 'Image.thumbnail', 'Image.crop', 'ImageDraw',
  // Pytest
  'pytest', 'fixture', 'raises', 'mark', 'parametrize',
  // Beautiful Soup
  'bs4', 'BeautifulSoup', 'find', 'find_all', 'select', 'get_text',
];