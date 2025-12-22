#include <napi.h>
#include <string>

namespace demo_addon {

  std::string internal_hello(const std::string& input) {
    return "Hello from C++! Electron UI said: " + input;
  }

  // N-API 封装函数
  Napi::String Method(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (info.Length() < 1 || !info[0].IsString()) {
      Napi::TypeError::New(env, "Wrong arguments, expected a string").ThrowAsJavaScriptException();
      return Napi::String::New(env, "");
    }
    std::string result = internal_hello(info[0].As<Napi::String>().Utf8Value());
    return Napi::String::New(env, result);
  }

  // 模块初始化
  Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set(Napi::String::New(env, "sayHelloCpp"), Napi::Function::New(env, Method));
    return exports;
  }

  NODE_API_MODULE(addon, Init)
} // namespace demo_addon
