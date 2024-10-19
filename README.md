## Docker Mysql

## Debian下，容器间无法访问
参考文章: [Docker端口不受ufw防火墙限制解决方案](https://blog.csdn.net/qq_52726195/article/details/138470819)
原因：docker和debian/ubuntu自带的ufw防火墙使用itables方式彼此不兼容。

踩坑很久，发现是防火墙问题，关闭防火墙`sudo ufw disable`就可以了，
需要重设防火墙。

### 重设ufw防火墙
修改`/etc/ufw/after.rules`文件
```
```