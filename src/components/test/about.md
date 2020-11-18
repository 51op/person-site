
# Information
用vue工程编写的个人博客网站，详细见[51运维com](http://xuliliang.com)

## Project setup
```
npm install

```

### Compiles and hot-reloads for development
```
npm run serve
```

### Production environment deployment (nginx)
[详见](!https://router.vuejs.org/zh/guide/essentials/history-mode.html)
```

location / {
  try_files $uri $uri/ /index.html;
}
```

### Examle


* 合法的标识符

``` 
int  a = 3;
int  _123 = 3;
int  $12aa = 3;
int  变量1 = 55;  //合法，但是不建议使用中文命名的标识符
```
