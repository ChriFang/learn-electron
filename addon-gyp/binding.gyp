{
    "targets":[
        {
            "target_name": "test",
            "sources": [ "cppsrc/main.cpp" ],
            "include_dirs": [
                 "<!@(node -p \"require('node-addon-api').include\")"
            ]
        }
    ]
}
