# install dependency

### 安装visual studio 2022 build tools
1、下载visual studio 2022生成工具（https://my.visualstudio.com/Downloads?q=visual%20studio%202022&wt.mc_id=o~msft~vscom~older-downloads）
2、运行安装程序，只勾选“使用 C++ 的桌面开发”
3、确认勾选了 MSVC v143 和 Windows 10/11 SDK即可

### 最新的node.js版本已经不需要单独安装windows-build-tools，node.js内部内置了构建工具，执行以下命令：
npm install --global --production npm-windows-upgrade

### 安装node-gyp
npm install node-gyp -g

### 安装addon-api
npm install node-addon-api -D

# build
node-gyp configure
node-gyp build

# run
node index.js

