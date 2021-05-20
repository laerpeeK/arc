<h1>C本科毕设《电弧故障检测系统Web端设计实现》DEMO</h1>
<div>
     By:   ---Jack Fang---<br/>
  技术栈：React/CSS/Express/Mongodb<br/>
     Ps: 拒绝复制粘贴，可在此基础代码上进行开发。
</div>

<h2>功能</h2>
<ol>
  <li>用户登录登出，身份验证</li>
  <li>支持在页面上对配置参数进行更新</li>
  <li>支持通过时间段查找检测数据并将其转换为线性图</li>
</ol>

<h2>使用方式</h2>
<ol>
  <li>下载到本地后，在arc, server两个文件夹下分别运行npm install安装依赖包</li>
  <li>arc文件夹下通过npm start运行前端文件，http://localhost:3000</li>
  <li>server文件夹下通过node app.js运行后端文件， http://localhost:3030</li>
  <li>mongodb存储格式参照mongo.png，检测数据存在server/public下，且有固定名称格式</li>
</ol>

<h2>二次开发的idea</h2>
<ol>
  <li>将前端重复代码进行去耦，成立组件库</li>
  <li>通过学习Echarts使用优化数据可视化功能</li>
  <li>通过Mongodb学习在后端增删改查时增加校验，日志功能</li>
.......
</ol>
