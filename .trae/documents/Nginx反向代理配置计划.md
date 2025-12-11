## Docker部署配置计划

### 1. 创建Dockerfile

* 使用多阶段构建，优化镜像大小

* 第一阶段：使用node:20-alpine作为构建环境，安装依赖并构建项目

* 第二阶段：使用nginx:alpine作为生产环境，部署构建产物

* 配置Nginx以正确处理React路由和静态资源

### 2. 创建.dockerignore文件

* 排除node\_modules、.git、构建产物等不必要的文件

* 确保Docker构建上下文最小化，提高构建速度

### 3. 创建docker-compose.yml（可选但推荐）

* 定义服务配置，包括端口映射、卷挂载等

* 支持一键启动和管理服务

* 方便后续扩展（如添加数据库等）

### 4. 配置说明

* Dockerfile将使用Vite的build命令构建项目

* Nginx配置将处理前端路由，防止刷新页面404问题

* 所有配置文件将遵循最佳实践，确保安全和性能

### 5. 文件路径

* `/Dockerfile`

* `/.dockerignore`

* `/docker-compose.yml`（可选）

