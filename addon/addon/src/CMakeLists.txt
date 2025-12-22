cmake_minimum_required(VERSION 3.1)
project(addon)

include_directories(${CMAKE_JS_INC})

execute_process(COMMAND node -p "require('node-addon-api').include"
        WORKING_DIRECTORY ${CMAKE_SOURCE_DIR}
        OUTPUT_VARIABLE NODE_ADDON_API_DIR
)
string(REGEX REPLACE "[\r\n\"]" "" NODE_ADDON_API_DIR ${NODE_ADDON_API_DIR})
message("node addon api dir: ${NODE_ADDON_API_DIR}")
include_directories(${NODE_ADDON_API_DIR})

add_library(addon SHARED addon.cc)

message("cmake js lib dir: ${CMAKE_JS_LIB}")
target_link_libraries(addon ${CMAKE_JS_LIB})

