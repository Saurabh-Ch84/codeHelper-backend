module.exports= [
  // Core language keywords
  "alignas", "alignof", "and", "and_eq", "asm", "auto", "bitand", "bitor", "bool", "break",
  "case", "catch", "char", "char8_t", "char16_t", "char32_t", "class", "compl", "concept", "const",
  "consteval", "constexpr", "constinit", "const_cast", "continue", "co_await", "co_return", "co_yield", "decltype", "default",
  "delete", "do", "double", "dynamic_cast", "else", "enum", "explicit", "export", "extern", "false",
  "float", "for", "friend", "goto", "if", "inline", "int", "long", "mutable", "namespace",
  "new", "noexcept", "not", "not_eq", "nullptr", "operator", "or", "or_eq", "private", "protected",
  "public", "register", "reinterpret_cast", "requires", "return", "short", "signed", "sizeof", "static", "static_assert",
  "static_cast", "struct", "switch", "template", "this", "thread_local", "throw", "true", "try", "typedef",
  "typeid", "typename", "union", "unsigned", "using", "virtual", "void", "volatile", "wchar_t", "while",
  "xor", "xor_eq",
  
  // Standard library - iostream
  "iostream", "istream", "ostream", "ifstream", "ofstream", "fstream", "stringstream", "istringstream", "ostringstream", "cout",
  "cin", "cerr", "clog", "wcout", "wcin", "wcerr", "wclog", "endl", "ends", "flush",
  "ws", "boolalpha", "noboolalpha", "showbase", "noshowbase", "showpoint", "noshowpoint", "showpos", "noshowpos", "skipws",
  "noskipws", "uppercase", "nouppercase", "unitbuf", "nounitbuf", "internal", "left", "right", "dec", "hex",
  "oct", "fixed", "scientific", "hexfloat", "defaultfloat", "get", "getline", "ignore", "peek", "putback",
  "unget", "read", "readsome", "gcount", "tellg", "tellp", "seekg", "seekp", "sync", "put",
  "write", "width", "fill", "precision", "eof", "fail", "bad", "good", "clear", "setstate",
  "rdstate", "exceptions", "copyfmt", "rdbuf", "tie", "narrow", "widen",
  
  // Standard library - string
  "string", "wstring", "u8string", "u16string", "u32string", "string_view", "wstring_view", "u8string_view", "u16string_view", "u32string_view",
  "basic_string", "char_traits", "length", "size", "max_size", "resize", "capacity", "reserve", "shrink_to_fit", "clear",
  "empty", "at", "back", "front", "operator[]", "c_str", "data", "begin", "end", "rbegin",
  "rend", "cbegin", "cend", "crbegin", "crend", "push_back", "pop_back", "append", "assign", "insert",
  "erase", "replace", "swap", "substr", "compare", "starts_with", "ends_with", "contains", "find", "rfind",
  "find_first_of", "find_last_of", "find_first_not_of", "find_last_not_of", "npos", "to_string", "to_wstring", "stoi", "stol",
  "stoll", "stoul", "stoull", "stof", "stod", "stold", "getline",
  
  // Standard library - containers
  "vector", "array", "deque", "list", "forward_list", "set", "multiset", "map", "multimap", "unordered_set",
  "unordered_multiset", "unordered_map", "unordered_multimap", "stack", "queue", "priority_queue", "span", "mdspan", "initializer_list", "valarray",
  "bitset", "pair", "tuple", "optional", "variant", "any", "expected", "make_pair", "make_tuple", "tie",
  "forward_as_tuple", "tuple_cat", "get", "make_optional", "make_any", "make_shared", "make_unique", "allocate_shared", "first", "second",
  
  // Container operations
  "emplace", "emplace_back", "emplace_front", "emplace_hint", "push", "pop", "top", "extract", "merge", "splice",
  "remove", "remove_if", "unique", "sort", "reverse", "count", "find", "lower_bound", "upper_bound", "equal_range",
  "key_comp", "value_comp", "hash_function", "key_eq", "get_allocator", "bucket_count", "max_bucket_count", "bucket_size", "bucket", "load_factor",
  "max_load_factor", "rehash", "reserve",
  
  // Standard library - iterators
  "iterator", "const_iterator", "reverse_iterator", "const_reverse_iterator", "move_iterator", "insert_iterator", "front_insert_iterator", "back_insert_iterator", "istream_iterator", "ostream_iterator",
  "istreambuf_iterator", "ostreambuf_iterator", "iterator_traits", "input_iterator_tag", "output_iterator_tag", "forward_iterator_tag", "bidirectional_iterator_tag", "random_access_iterator_tag", "contiguous_iterator_tag", "advance",
  "distance", "next", "prev", "iter_swap", "iter_move", "make_reverse_iterator", "make_move_iterator", "front_inserter", "back_inserter", "inserter",
  
  // Standard library - algorithms
  "algorithm", "all_of", "any_of", "none_of", "for_each", "for_each_n", "count", "count_if", "mismatch", "find",
  "find_if", "find_if_not", "find_end", "find_first_of", "adjacent_find", "search", "search_n", "copy", "copy_if", "copy_n",
  "copy_backward", "move", "move_backward", "fill", "fill_n", "transform", "generate", "generate_n", "remove", "remove_if",
  "remove_copy", "remove_copy_if", "replace", "replace_if", "replace_copy", "replace_copy_if", "swap", "swap_ranges", "iter_swap", "reverse",
  "reverse_copy", "rotate", "rotate_copy", "shift_left", "shift_right", "random_shuffle", "shuffle", "sample", "unique", "unique_copy",
  "is_partitioned", "partition", "partition_copy", "stable_partition", "partition_point", "is_sorted", "is_sorted_until", "sort", "partial_sort", "partial_sort_copy",
  "stable_sort", "nth_element", "lower_bound", "upper_bound", "binary_search", "equal_range", "merge", "inplace_merge", "includes", "set_difference",
  "set_intersection", "set_symmetric_difference", "set_union", "is_heap", "is_heap_until", "make_heap", "push_heap", "pop_heap", "sort_heap", "clamp",
  "max", "max_element", "min", "min_element", "minmax", "minmax_element", "equal", "lexicographical_compare", "lexicographical_compare_three_way", "is_permutation",
  "next_permutation", "prev_permutation", "iota", "accumulate", "inner_product", "adjacent_difference", "partial_sum", "reduce", "exclusive_scan", "inclusive_scan",
  "transform_reduce", "transform_exclusive_scan", "transform_inclusive_scan", "ranges",
  
  // Standard library - memory
  "memory", "unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr", "enable_shared_from_this", "owner_less", "default_delete", "allocator", "allocator_traits",
  "pointer_traits", "addressof", "align", "assume_aligned", "make_shared", "make_unique", "allocate_shared", "static_pointer_cast", "dynamic_pointer_cast", "const_pointer_cast",
  "reinterpret_pointer_cast", "get_deleter", "shared_from_this", "weak_from_this", "use_count", "unique", "reset", "release", "get", "operator*",
  "operator->", "operator bool", "owner_before", "lock", "expired", "uninitialized_copy", "uninitialized_copy_n", "uninitialized_fill", "uninitialized_fill_n", "uninitialized_move",
  "uninitialized_move_n", "uninitialized_default_construct", "uninitialized_default_construct_n", "uninitialized_value_construct", "uninitialized_value_construct_n", "destroy", "destroy_at", "destroy_n", "construct_at", "allocate",
  "deallocate", "construct", "destroy",
  
  // Standard library - functional
  "functional", "function", "bind", "placeholders", "_1", "_2", "_3", "_4", "_5", "ref",
  "cref", "reference_wrapper", "invoke", "invoke_r", "mem_fn", "not_fn", "bind_front", "bind_back", "plus", "minus",
  "multiplies", "divides", "modulus", "negate", "equal_to", "not_equal_to", "greater", "less", "greater_equal", "less_equal",
  "logical_and", "logical_or", "logical_not", "bit_and", "bit_or", "bit_xor", "bit_not", "identity", "hash", "unary_function",
  "binary_function", "unary_negate", "binary_negate", "not1", "not2", "binder1st", "binder2nd", "bind1st", "bind2nd", "pointer_to_unary_function",
  "pointer_to_binary_function", "ptr_fun", "mem_fun", "mem_fun_ref", "const_mem_fun_t", "const_mem_fun_ref_t",
  
  // Standard library - utility
  "utility", "swap", "exchange", "forward", "move", "move_if_noexcept", "as_const", "declval", "to_underlying", "cmp_equal",
  "cmp_not_equal", "cmp_less", "cmp_greater", "cmp_less_equal", "cmp_greater_equal", "in_range", "unreachable", "pair", "piecewise_construct", "piecewise_construct_t",
  "in_place", "in_place_t", "in_place_type", "in_place_type_t", "in_place_index", "in_place_index_t", "integer_sequence", "index_sequence", "make_integer_sequence", "make_index_sequence",
  "index_sequence_for",
  
  // Standard library - chrono
  "chrono", "duration", "time_point", "system_clock", "steady_clock", "high_resolution_clock", "utc_clock", "tai_clock", "gps_clock", "file_clock",
  "local_t", "duration_cast", "time_point_cast", "floor", "ceil", "round", "abs", "treat_as_floating_point", "duration_values", "common_type",
  "nanoseconds", "microseconds", "milliseconds", "seconds", "minutes", "hours", "days", "weeks", "months", "years",
  "sys_time", "sys_seconds", "sys_days", "utc_time", "tai_time", "gps_time", "file_time", "local_time", "local_seconds", "local_days",
  "clock_time_conversion", "clock_cast", "now", "to_time_t", "from_time_t", "is_steady", "time_since_epoch", "day", "month",
  "year", "weekday", "weekday_indexed", "weekday_last", "month_day", "month_day_last", "month_weekday", "month_weekday_last", "year_month", "year_month_day",
  "year_month_day_last", "year_month_weekday", "year_month_weekday_last", "hh_mm_ss", "is_am", "is_pm", "make12", "make24", "tzdb", "tzdb_list",
  "get_tzdb", "get_tzdb_list", "locate_zone", "current_zone", "time_zone", "zoned_time", "zoned_traits", "leap_second", "leap_second_info", "get_leap_second_info",
  
  // Standard library - ratio
  "ratio", "ratio_add", "ratio_subtract", "ratio_multiply", "ratio_divide", "ratio_equal", "ratio_not_equal", "ratio_less", "ratio_less_equal", "ratio_greater",
  "ratio_greater_equal", "atto", "femto", "pico", "nano", "micro", "milli", "centi", "deci", "deca", "hecto",
  "kilo", "mega", "giga", "tera", "peta", "exa", "zetta", "yotta", "zebi", "yobi",
  
  // Standard library - thread
  "thread", "this_thread", "jthread", "get_id", "native_handle", "hardware_concurrency", "joinable", "join", "detach", "swap",
  "yield", "sleep_for", "sleep_until", "get_stop_source", "get_stop_token", "request_stop", "stop_token", "stop_source", "stop_callback", "nostopstate",
  
  // Standard library - mutex
  "mutex", "recursive_mutex", "timed_mutex", "recursive_timed_mutex", "shared_mutex", "shared_timed_mutex", "lock_guard", "scoped_lock", "unique_lock", "shared_lock",
  "defer_lock", "try_to_lock", "adopt_lock", "defer_lock_t", "try_to_lock_t", "adopt_lock_t", "lock", "try_lock", "call_once", "once_flag",
  
  // Standard library - condition variable
  "condition_variable", "condition_variable_any", "notify_all_at_thread_exit", "cv_status", "wait", "wait_for", "wait_until", "notify_one", "notify_all",
  
  // Standard library - atomic
  "atomic", "atomic_flag", "atomic_ref", "memory_order", "memory_order_relaxed", "memory_order_consume", "memory_order_acquire", "memory_order_release", "memory_order_acq_rel", "memory_order_seq_cst",
  "kill_dependency", "atomic_thread_fence", "atomic_signal_fence", "atomic_load", "atomic_load_explicit", "atomic_store", "atomic_store_explicit", "atomic_exchange", "atomic_exchange_explicit", "atomic_compare_exchange_weak",
  "atomic_compare_exchange_weak_explicit", "atomic_compare_exchange_strong", "atomic_compare_exchange_strong_explicit", "atomic_fetch_add", "atomic_fetch_add_explicit", "atomic_fetch_sub", "atomic_fetch_sub_explicit", "atomic_fetch_and", "atomic_fetch_and_explicit", "atomic_fetch_or",
  "atomic_fetch_or_explicit", "atomic_fetch_xor", "atomic_fetch_xor_explicit", "atomic_wait", "atomic_wait_explicit", "atomic_notify_one", "atomic_notify_all", "atomic_flag_test_and_set", "atomic_flag_test_and_set_explicit", "atomic_flag_clear",
  "atomic_flag_clear_explicit", "atomic_flag_test", "atomic_flag_test_explicit", "atomic_flag_wait", "atomic_flag_wait_explicit", "atomic_flag_notify_one", "atomic_flag_notify_all", "atomic_init", "ATOMIC_VAR_INIT", "ATOMIC_FLAG_INIT",
  
  // Standard library - future
  "future", "promise", "packaged_task", "async", "future_status", "future_error", "future_errc", "future_category", "launch", "launch_async",
  "launch_deferred", "share", "valid", "wait", "wait_for", "wait_until", "set_value", "set_value_at_thread_exit", "set_exception", "set_exception_at_thread_exit",
  "make_ready_at_thread_exit", "get_future",
  
  // Standard library - numeric
  "numeric", "iota", "accumulate", "inner_product", "adjacent_difference", "partial_sum", "reduce", "transform_reduce", "exclusive_scan", "inclusive_scan",
  "transform_exclusive_scan", "transform_inclusive_scan", "gcd", "lcm", "midpoint", "lerp",
  
  // Standard library - limits
  "limits", "numeric_limits", "float_round_style", "float_denorm_style", "is_specialized", "is_signed", "is_integer", "is_exact", "has_infinity", "has_quiet_NaN",
  "has_signaling_NaN", "has_denorm", "has_denorm_loss", "round_style", "is_iec559", "is_bounded", "is_modulo", "digits", "digits10", "max_digits10",
  "radix", "min_exponent", "min_exponent10", "max_exponent", "max_exponent10", "traps", "tinyness_before", "lowest", "min", "max",
  "epsilon", "round_error", "infinity", "quiet_NaN", "signaling_NaN", "denorm_min",
  
  // Standard library - cmath
  "cmath", "abs", "fabs", "fmod", "remainder", "remquo", "fma", "fmax", "fmin", "fdim",
  "nan", "nanf", "nanl", "exp", "exp2", "expm1", "log", "log10", "log2", "log1p",
  "sqrt", "cbrt", "hypot", "pow", "sin", "cos", "tan", "asin", "acos", "atan",
  "atan2", "sinh", "cosh", "tanh", "asinh", "acosh", "atanh", "erf", "erfc", "tgamma",
  "lgamma", "ceil", "floor", "trunc", "round", "lround", "llround", "nearbyint", "rint", "lrint",
  "llrint", "frexp", "ldexp", "modf", "scalbn", "scalbln", "ilogb", "logb", "nextafter", "nexttoward",
  "copysign", "fpclassify", "isfinite", "isinf", "isnan", "isnormal", "signbit", "isgreater", "isgreaterequal", "isless",
  "islessequal", "islessgreater", "isunordered", "math_errhandling", "INFINITY", "NAN", "HUGE_VAL", "HUGE_VALF", "HUGE_VALL", "FP_INFINITE",
  "FP_NAN", "FP_NORMAL", "FP_SUBNORMAL", "FP_ZERO", "FP_FAST_FMA", "FP_FAST_FMAF", "FP_FAST_FMAL", "FP_ILOGB0", "FP_ILOGBNAN", "MATH_ERRNO",
  "MATH_ERREXCEPT", "M_E", "M_LOG2E", "M_LOG10E", "M_LN2", "M_LN10", "M_PI", "M_PI_2", "M_PI_4", "M_1_PI",
  "M_2_PI", "M_2_SQRTPI", "M_SQRT2", "M_SQRT1_2",
  
  // Standard library - complex
  "complex", "real", "imag", "abs", "arg", "norm", "conj", "proj", "polar", "exp",
  "log", "log10", "pow", "sqrt", "sin", "cos", "tan", "asin", "acos", "atan",
  "sinh", "cosh", "tanh", "asinh", "acosh", "atanh",
  
  // Standard library - random
  "random", "random_device", "seed_seq", "generate_canonical", "uniform_int_distribution", "uniform_real_distribution", "bernoulli_distribution", "binomial_distribution", "negative_binomial_distribution", "geometric_distribution",
  "poisson_distribution", "exponential_distribution", "gamma_distribution", "weibull_distribution", "extreme_value_distribution", "normal_distribution", "lognormal_distribution", "chi_squared_distribution", "cauchy_distribution", "fisher_f_distribution",
  "student_t_distribution", "discrete_distribution", "piecewise_constant_distribution", "piecewise_linear_distribution", "linear_congruential_engine", "mersenne_twister_engine", "subtract_with_carry_engine", "discard_block_engine", "independent_bits_engine", "shuffle_order_engine",
  "minstd_rand", "minstd_rand0", "mt19937", "mt19937_64", "ranlux24", "ranlux48", "knuth_b", "default_random_engine", "seed", "entropy",
  "operator()", "min", "max", "param", "reset",
  
  // Standard library - exception
  "exception", "bad_exception", "nested_exception", "exception_ptr", "current_exception", "rethrow_exception", "make_exception_ptr", "throw_with_nested", "rethrow_if_nested", "terminate",
  "terminate_handler", "set_terminate", "get_terminate", "uncaught_exception", "uncaught_exceptions", "what", "logic_error", "invalid_argument", "domain_error", "length_error",
  "out_of_range", "runtime_error", "range_error", "overflow_error", "underflow_error", "bad_alloc", "bad_array_new_length", "bad_cast", "bad_typeid", "bad_function_call",
  "bad_weak_ptr", "bad_optional_access", "bad_expected_access", "bad_variant_access", "bad_any_cast",
  
  // Standard library - type_traits
  "type_traits", "integral_constant", "bool_constant", "true_type", "false_type", "is_void", "is_null_pointer", "is_integral", "is_floating_point", "is_array",
  "is_enum", "is_union", "is_class", "is_function", "is_pointer", "is_lvalue_reference", "is_rvalue_reference", "is_member_object_pointer", "is_member_function_pointer", "is_fundamental",
  "is_arithmetic", "is_scalar", "is_object", "is_compound", "is_reference", "is_member_pointer", "is_const", "is_volatile", "is_trivial", "is_trivially_copyable",
  "is_standard_layout", "is_pod", "is_empty", "is_polymorphic", "is_abstract", "is_final", "is_aggregate", "is_signed", "is_unsigned", "is_bounded_array",
  "is_unbounded_array", "is_scoped_enum", "is_constructible", "is_trivially_constructible", "is_nothrow_constructible", "is_default_constructible", "is_trivially_default_constructible", "is_nothrow_default_constructible", "is_copy_constructible", "is_trivially_copy_constructible",
  "is_nothrow_copy_constructible", "is_move_constructible", "is_trivially_move_constructible", "is_nothrow_move_constructible", "is_assignable", "is_trivially_assignable", "is_nothrow_assignable", "is_copy_assignable", "is_trivially_copy_assignable", "is_nothrow_copy_assignable",
  "is_move_assignable", "is_trivially_move_assignable", "is_nothrow_move_assignable", "is_destructible", "is_trivially_destructible", "is_nothrow_destructible", "has_virtual_destructor", "is_swappable", "is_swappable_with", "is_nothrow_swappable",
  "is_nothrow_swappable_with", "alignment_of", "rank", "extent", "is_same", "is_base_of", "is_convertible", "is_nothrow_convertible", "is_layout_compatible", "is_pointer_interconvertible_base_of",
  "is_invocable", "is_invocable_r", "is_nothrow_invocable", "is_nothrow_invocable_r", "remove_cv", "remove_const", "remove_volatile", "add_cv", "add_const", "add_volatile",
  "remove_reference", "add_lvalue_reference", "add_rvalue_reference", "remove_pointer", "add_pointer", "make_signed", "make_unsigned", "remove_extent", "remove_all_extents", "aligned_storage",
  "aligned_union", "decay", "remove_cvref", "enable_if", "conditional", "common_type", "common_reference", "underlying_type", "invoke_result", "void_t",
  "conjunction", "disjunction", "negation", "is_constant_evaluated", "is_corresponding_member", "is_pointer_interconvertible_with_class", "has_unique_object_representations", "endian",
  
  // Standard library - typeindex and typeinfo
  "typeindex", "type_index", "typeinfo", "type_info", "name", "before", "hash_code",
  
  // Standard library - regex
  "regex", "basic_regex", "sub_match", "match_results", "regex_iterator", "regex_token_iterator", "regex_error", "regex_match", "regex_search", "regex_replace",
  "regex_constants", "syntax_option_type", "match_flag_type", "error_type", "icase", "nosubs", "optimize", "collate", "ECMAScript", "basic",
  "extended", "awk", "grep", "egrep", "match_default", "match_not_bol", "match_not_eol", "match_not_bow", "match_not_eow", "match_any",
  "match_not_null", "match_continuous", "match_prev_avail", "format_default", "format_sed", "format_no_copy", "format_first_only",
  
  // Standard library - filesystem
  "filesystem", "path", "directory_entry", "directory_iterator", "recursive_directory_iterator", "file_status", "space_info", "file_type", "perms", "perm_options",
  "copy_options", "directory_options", "file_time_type", "absolute", "canonical", "weakly_canonical", "relative", "proximate", "copy", "copy_file",
  "copy_symlink", "create_directory", "create_directories", "create_hard_link", "create_symlink", "create_directory_symlink", "current_path", "exists", "equivalent", "file_size",
  "hard_link_count", "last_write_time", "permissions", "read_symlink", "remove", "remove_all", "rename", "resize_file", "space", "status",
  "symlink_status", "temp_directory_path", "is_block_file", "is_character_file", "is_directory", "is_empty", "is_fifo", "is_other", "is_regular_file", "is_socket",
  "is_symlink", "status_known",
  
  // Standard library - format
  "format", "format_to", "format_to_n", "formatted_size", "vformat", "vformat_to", "make_format_args", "make_wformat_args", "format_string", "wformat_string",
  "format_args", "wformat_args", "format_context", "wformat_context", "format_parse_context", "wformat_parse_context", "formatter", "format_error", "visit_format_arg",
  
  // Standard library - source_location
  "source_location", "current", "line", "column", "file_name", "function_name",
  
  // Standard library - bit
  "bit", "bit_cast", "byteswap", "has_single_bit", "bit_ceil", "bit_floor", "bit_width", "rotl", "rotr", "countl_zero",
  "countl_one", "countr_zero", "countr_one", "popcount", "endian", "little", "big", "native",
  
  // Standard library - compare
  "compare", "partial_ordering", "weak_ordering", "strong_ordering", "compare_three_way", "compare_three_way_result", "three_way_comparable", "three_way_comparable_with", "strong_order", "weak_order",
  "partial_order", "compare_strong_order_fallback", "compare_weak_order_fallback", "compare_partial_order_fallback", "is_eq", "is_neq", "is_lt", "is_lteq", "is_gt", "is_gteq",
  
  // Standard library - concepts
  "concepts", "same_as", "derived_from", "convertible_to", "common_reference_with", "common_with", "integral", "signed_integral", "unsigned_integral", "floating_point",
  "assignable_from", "swappable", "swappable_with", "destructible", "constructible_from", "default_initializable", "move_constructible", "copy_constructible", "equality_comparable", "equality_comparable_with",
  "totally_ordered", "totally_ordered_with", "movable", "copyable", "semiregular", "regular", "invocable", "regular_invocable", "predicate", "relation",
  "equivalence_relation", "strict_weak_order", "indirectly_unary_invocable", "indirectly_regular_unary_invocable", "indirect_unary_predicate", "indirect_binary_predicate", "indirect_equivalence_relation", "indirect_strict_weak_order", "indirectly_movable", "indirectly_movable_storable",
  "indirectly_copyable", "indirectly_copyable_storable", "indirectly_swappable", "indirectly_comparable", "permutable", "mergeable", "sortable", "sized_sentinel_for", "disable_sized_sentinel_for",
  
  // Standard library - ranges
  "ranges", "view", "view_interface", "subrange", "dangling", "borrowed_iterator_t", "borrowed_subrange_t", "range", "borrowed_range", "sized_range",
  "view", "input_range", "output_range", "forward_range", "bidirectional_range", "random_access_range", "contiguous_range", "common_range", "viewable_range",
  "constant_range", "range_difference_t", "range_size_t", "range_value_t", "range_reference_t", "range_rvalue_reference_t", "views", "all", "filter", "transform",
  "take", "take_while", "drop", "drop_while", "join", "split", "counted", "common", "reverse", "elements",
  "keys", "values", "enumerate", "zip", "zip_transform", "adjacent", "adjacent_transform", "chunk", "slide", "chunk_by",
  "stride", "cartesian_product", "iota_view","single_view", "empty_view", "basic_istream_view", "ref_view", "owning_view", "as_rvalue_view", "as_const_view", "repeat_view", "iota",
  "single", "empty", "istream", "repeat", "basic_istream_view", "filter_view", "transform_view", "take_view", "take_while_view",
  "drop_view", "drop_while_view", "join_view", "join_with_view", "split_view", "lazy_split_view", "common_view", "reverse_view", "elements_view",
  "keys_view", "values_view", "enumerate_view", "zip_view", "zip_transform_view", "adjacent_view", "adjacent_transform_view", "chunk_view", "slide_view",
  "chunk_by_view", "stride_view", "cartesian_product_view", "subrange_kind", "get", "tuple_size", "tuple_element",
  
  // Standard library - span
  "span", "dynamic_extent", "as_bytes", "as_writable_bytes", "subspan", "first", "last", "extent",
  
  // Standard library - mdspan (C++23)
  "mdspan", "extents", "layout_left", "layout_right", "layout_stride", "default_accessor", "dextents", "dims",
  
  // Standard library - initializer_list
  "initializer_list",
  
  // Standard library - csignal
  "csignal", "signal", "raise", "sig_atomic_t", "SIGTERM", "SIGSEGV", "SIGINT", "SIGILL", "SIGABRT", "SIGFPE",
  "SIG_DFL", "SIG_IGN", "SIG_ERR",
  
  // Standard library - csetjmp
  "csetjmp", "jmp_buf", "setjmp", "longjmp",
  
  // Standard library - cstdarg
  "cstdarg", "va_list", "va_start", "va_arg", "va_end", "va_copy",
  
  // Standard library - cstddef
  "cstddef", "ptrdiff_t", "size_t", "max_align_t", "nullptr_t", "byte", "offsetof", "NULL",
  
  // Standard library - cstdlib
  "cstdlib", "div_t", "ldiv_t", "lldiv_t", "size_t", "atof", "atoi", "atol", "atoll", "strtol",
  "strtoll", "strtoul", "strtoull", "strtof", "strtod", "strtold", "rand", "srand", "calloc", "free",
  "malloc", "realloc", "aligned_alloc", "abort", "atexit", "at_quick_exit", "exit", "quick_exit", "_Exit", "getenv",
  "system", "bsearch", "qsort", "abs", "labs", "llabs", "div", "ldiv", "lldiv", "mblen",
  "mbtowc", "wctomb", "mbstowcs", "wcstombs", "RAND_MAX", "EXIT_SUCCESS", "EXIT_FAILURE", "MB_CUR_MAX",
  
  // Standard library - cstring
  "cstring", "memchr", "memcmp", "memcpy", "memmove", "memset", "strcat", "strchr", "strcmp", "strcoll",
  "strcpy", "strcspn", "strerror", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn",
  "strstr", "strtok", "strxfrm",
  
  // Standard library - cwchar
  "cwchar", "wchar_t", "wint_t", "wmemchr", "wmemcmp", "wmemcpy", "wmemmove", "wmemset", "wcscat", "wcschr",
  "wcscmp", "wcscoll", "wcscpy", "wcscspn", "wcslen", "wcsncat", "wcsncmp", "wcsncpy", "wcspbrk", "wcsrchr",
  "wcsrtombs", "wcsspn", "wcsstr", "wcstod", "wcstof", "wcstok", "wcstol", "wcstold", "wcstoll", "wcstoul",
  "wcstoull", "wcsxfrm", "wctob", "wmemcmp", "mbsinit", "btowc", "mbrlen", "mbrtowc", "wcrtomb", "mbsrtowcs",
  "wcsrtombs", "WCHAR_MIN", "WCHAR_MAX", "WEOF",
  
  // Standard library - cctype
  "cctype", "isalnum", "isalpha", "islower", "isupper", "isdigit", "isxdigit", "iscntrl", "isgraph", "isspace",
  "isblank", "isprint", "ispunct", "tolower", "toupper",
  
  // Standard library - cwctype
  "cwctype", "wctype_t", "wctrans_t", "iswalnum", "iswalpha", "iswlower", "iswupper", "iswdigit", "iswxdigit", "iswcntrl",
  "iswgraph", "iswspace", "iswblank", "iswprint", "iswpunct", "iswctype", "wctype", "towlower", "towupper", "towctrans",
  "wctrans", "WEOF",
  
  // Standard library - ctime
  "ctime", "clock_t", "time_t", "tm", "timespec", "clock", "difftime", "mktime", "time", "asctime",
  "ctime", "gmtime", "localtime", "strftime", "wcsftime", "timespec_get", "CLOCKS_PER_SEC", "TIME_UTC",
  
  // Standard library - cfloat
  "cfloat", "FLT_RADIX", "FLT_MANT_DIG", "DBL_MANT_DIG", "LDBL_MANT_DIG", "FLT_DIG", "DBL_DIG", "LDBL_DIG", "FLT_MIN_EXP", "DBL_MIN_EXP",
  "LDBL_MIN_EXP", "FLT_MIN_10_EXP", "DBL_MIN_10_EXP", "LDBL_MIN_10_EXP", "FLT_MAX_EXP", "DBL_MAX_EXP", "LDBL_MAX_EXP", "FLT_MAX_10_EXP", "DBL_MAX_10_EXP", "LDBL_MAX_10_EXP",
  "FLT_MAX", "DBL_MAX", "LDBL_MAX", "FLT_EPSILON", "DBL_EPSILON", "LDBL_EPSILON", "FLT_MIN", "DBL_MIN", "LDBL_MIN", "FLT_ROUNDS",
  "FLT_EVAL_METHOD", "DECIMAL_DIG",
  
  // Standard library - climits
  "climits", "CHAR_BIT", "SCHAR_MIN", "SCHAR_MAX", "UCHAR_MAX", "CHAR_MIN", "CHAR_MAX", "MB_LEN_MAX", "SHRT_MIN", "SHRT_MAX",
  "USHRT_MAX", "INT_MIN", "INT_MAX", "UINT_MAX", "LONG_MIN", "LONG_MAX", "ULONG_MAX", "LLONG_MIN", "LLONG_MAX", "ULLONG_MAX",
  
  // Standard library - cstdint
  "cstdint", "int8_t", "int16_t", "int32_t", "int64_t", "int_fast8_t", "int_fast16_t", "int_fast32_t", "int_fast64_t", "int_least8_t",
  "int_least16_t", "int_least32_t", "int_least64_t", "intmax_t", "intptr_t", "uint8_t", "uint16_t", "uint32_t", "uint64_t", "uint_fast8_t",
  "uint_fast16_t", "uint_fast32_t", "uint_fast64_t", "uint_least8_t", "uint_least16_t", "uint_least32_t", "uint_least64_t", "uintmax_t", "uintptr_t", "INT8_MIN",
  "INT16_MIN", "INT32_MIN", "INT64_MIN", "INT8_MAX", "INT16_MAX", "INT32_MAX", "INT64_MAX", "UINT8_MAX", "UINT16_MAX", "UINT32_MAX",
  "UINT64_MAX", "INTPTR_MIN", "INTPTR_MAX", "UINTPTR_MAX", "INTMAX_MIN", "INTMAX_MAX", "UINTMAX_MAX", "PTRDIFF_MIN", "PTRDIFF_MAX", "SIZE_MAX",
  
  // Standard library - cinttypes
  "cinttypes", "imaxdiv_t", "imaxabs", "imaxdiv", "strtoimax", "strtoumax", "wcstoimax", "wcstoumax",
  
  // Standard library - cuchar
  "cuchar", "mbrtoc8", "c8rtomb", "mbrtoc16", "c16rtomb", "mbrtoc32", "c32rtomb",
  
  // Standard library - barrier and latch
  "barrier", "latch", "arrive", "arrive_and_wait", "arrive_and_drop", "count_down", "try_wait", "wait", "max",
  
  // Standard library - semaphore
  "semaphore", "counting_semaphore", "binary_semaphore", "acquire", "try_acquire", "try_acquire_for", "try_acquire_until", "release",
  
  // Standard library - print (C++23)
  "print", "println", "vprint_unicode", "vprint_nonunicode",
  
  // Standard library - stacktrace (C++23)
  "stacktrace", "stacktrace_entry", "basic_stacktrace", "current", "description", "source_file", "source_line",
  
  // Standard library - expected (C++23)
  "expected", "unexpected", "unexpect_t", "unexpect", "bad_expected_access", "has_value", "value", "error", "value_or",
  "error_or", "and_then", "or_else", "transform", "transform_error",
  
  // Standard library - flat_map and flat_set (C++23)
  "flat_map", "flat_multimap", "flat_set", "flat_multiset",
  
  // Standard library - generator (C++23)
  "generator", "yielded",
  
  // Standard library - mdspan (C++23)
  "layout_left_padded", "layout_right_padded",
  
  // Common typedefs and using declarations
  "std", "size_type", "difference_type", "value_type", "reference", "const_reference", "pointer", "const_pointer", "allocator_type", "key_type",
  "mapped_type", "key_compare", "value_compare", "hasher", "key_equal", "local_iterator", "const_local_iterator", "node_type", "insert_return_type",
  
  // Standard library - valarray
  "valarray", "slice", "gslice", "slice_array", "gslice_array", "mask_array", "indirect_array", "apply", "cshift", "shift",
  
  // Additional commonly used identifiers
  "main", "argc", "argv", "std", "nullptr", "override", "final", "noexcept", "constexpr", "consteval",
  "constinit", "decltype", "static_assert", "concept", "requires", "co_await", "co_return", "co_yield", "export", "module",
  "import", "typename", "template", "explicit", "inline", "virtual", "friend", "mutable", "volatile", "register",
  
  // Preprocessor directives (commonly autocompleted)
  "include", "define", "undef", "ifdef", "ifndef", "if", "elif", "else", "endif", "error",
  "pragma", "line", "warning", "defined", "__FILE__", "__LINE__", "__DATE__", "__TIME__", "__cplusplus", "__STDC_HOSTED__",
  "__STDCPP_DEFAULT_NEW_ALIGNMENT__", "__STDCPP_BFLOAT16_T__", "__STDCPP_FLOAT16_T__", "__STDCPP_FLOAT32_T__", "__STDCPP_FLOAT64_T__", "__STDCPP_FLOAT128_T__",
  
  // Common macro guards and patterns
  "NULL", "TRUE", "FALSE", "EOF", "BUFSIZ", "FILENAME_MAX", "FOPEN_MAX", "TMP_MAX", "L_tmpnam", "SEEK_SET",
  "SEEK_CUR", "SEEK_END",
  
  // Additional STL algorithm helpers
  "execution", "seq", "par", "par_unseq", "unseq",
  
  // Contract support (future C++ features often referenced)
  "expects", "ensures", "assert",
  
  // Coroutine support types
  "coroutine_handle", "coroutine_traits", "suspend_always", "suspend_never", "noop_coroutine", "noop_coroutine_promise", "noop_coroutine_handle",
  
  // RAII and smart pointer helpers
  "make_from_tuple", "apply",
  
  // Formatting and string conversion
  "to_chars", "from_chars", "to_chars_result", "from_chars_result", "chars_format",
  
  // Memory resource (PMR)
  "pmr", "memory_resource", "polymorphic_allocator", "pool_options", "synchronized_pool_resource", "unsynchronized_pool_resource", "monotonic_buffer_resource", "new_delete_resource", "null_memory_resource", "get_default_resource",
  "set_default_resource",
  
  // Additional iterator categories and tags
  "output_iterator", "input_iterator", "forward_iterator", "bidirectional_iterator", "random_access_iterator", "contiguous_iterator",
  
  // Additional functional programming utilities
  "default_searcher", "boyer_moore_searcher", "boyer_moore_horspool_searcher",
  
  // Locale support
  "locale", "use_facet", "has_facet", "isspace", "isprint", "iscntrl", "isupper", "islower", "isalpha", "isdigit",
  "ispunct", "isxdigit", "isalnum", "isgraph", "toupper", "tolower", "codecvt", "codecvt_utf8", "codecvt_utf16", "codecvt_utf8_utf16",
  "collate", "ctype", "messages", "money_get", "money_put", "moneypunct", "num_get", "num_put", "numpunct", "time_get",
  "time_put", "codecvt_base", "codecvt_mode", "consume_header", "generate_header", "little_endian",
  
  // Additional math constants (C++20)
  "numbers", "e_v", "log2e_v", "log10e_v", "pi_v", "inv_pi_v", "inv_sqrtpi_v", "ln2_v", "ln10_v", "sqrt2_v",
  "sqrt3_v", "inv_sqrt3_v", "egamma_v", "phi_v",
  
  // Networking (future std::net, often referenced)
  "net", "ip", "tcp", "udp", "socket", "acceptor", "resolver", "endpoint", "address", "address_v4",
  "address_v6",
  
  // Additional C++20/23 features
  "std_call", "std_call_once", "jthread", "stop_source", "stop_token", "stop_callback",
  
  // Common test and debugging
  "assert", "static_assert", "cassert", "NDEBUG",
  
  // Additional container adaptors
  "container_adaptor",
  
  // Miscellaneous commonly used
  "pair", "tuple", "apply", "make_from_tuple", "index_sequence", "integer_sequence", "in_place", "nullopt", "nullopt_t", "bad_optional_access"
];