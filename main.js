import { EACH } from "./objectAndArrays/2_each";
import { MAP } from "./objectAndArrays/3_map";
import { MAP_MY_SELF } from "./objectAndArrays/4_map_myself";
import { FILTER } from "./objectAndArrays/5_filter";
import { FILTER_MY_SELF } from "./objectAndArrays/6_filter_by_myself";
import { FIND } from "./objectAndArrays/7_find";
import { DELETE_FROM_ARRAY } from "./objectAndArrays/9_delete_from_array";
import { DELETE_FROM_ARRAY_MY_SELF } from "./objectAndArrays/10_reject_my_self";
import { EVERY_SOME } from "./objectAndArrays/10_every_some";
import { SORTING } from "./objectAndArrays/11_sorting";
import { GRUPPING } from "./objectAndArrays/12_grupping";
import { CHANNING } from "./objectAndArrays/13_channing";
import { ARRAY_PARTS } from "./objectAndArrays/14_array_parts";

import { REGISTERS } from "./strings/15_registers";
import { CONCAT_SPLIT_ARRAYS } from "./strings/16_concat_and_split_arrays";

import { RANDOMIZE } from "./advancedFunctions/20_randomize";
import { ONE_DIMENSIONAL_ARRAY } from "./advancedFunctions/22_one_dementional_array";
import { IMMUTABLE } from "./advancedFunctions/24_immutable";
import { CLONE } from "./advancedFunctions/25_clone";
import { DEBOUNCE } from "./advancedFunctions/26_debounce";
import { THROTTLE } from "./advancedFunctions/27_throlle";
import { MIXINS } from "./advancedFunctions/29_mixins";

import { MAPPING } from "./youtSelf/30_mapping";

const objectsAndArrays = () => {
  EACH();
  MAP();
  MAP_MY_SELF();
  FILTER();
  FILTER_MY_SELF();
  FIND();
  DELETE_FROM_ARRAY();
  DELETE_FROM_ARRAY_MY_SELF();
  EVERY_SOME();
  SORTING();
  GRUPPING();
  CHANNING();
  ARRAY_PARTS();
};

const strings = () => {
  REGISTERS();
  CONCAT_SPLIT_ARRAYS();
};

const advancedFunctions = () => {
  RANDOMIZE();
  ONE_DIMENSIONAL_ARRAY();
  IMMUTABLE();
  // CLONE();
  DEBOUNCE();
  THROTTLE();
  MIXINS();
};

const yourSelf = () => {
  MAPPING();
};

objectsAndArrays();
strings();
advancedFunctions();
yourSelf();
