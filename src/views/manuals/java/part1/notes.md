# 1.1 注释
___


* 单行注释：  使用“//”开头，“//”后面的单行内容均为注释。

* 多行注释：   以“/*”开头以“*/”结尾，在“/*”和“*/”之间的内容为注释，我们也可以使用多行注释作为行内注释。但是在使用时要注意，多行注释不能嵌套使用。

* 文档注释：   以“/**”开头以“*/”结尾，注释中包含一些说明性的文字及一些JavaDoc标签(后期写项目时，可以生成项目的API)

---

### 案例
Java的三种注释类型

```
/**
 * @ClasssNmae:InterTest
 * @Author:xuliliang
 * @Description:
 * @Date:2019/9/17 下午4:32
 * @Version:1.0
 **/
public class InterTest {
    //我是单行注释
    public static void main(String[] args/*我是行内注释 */) {
        System.out.println("Hello World!");
    }
    /*
       我是多行注释！
       我是多行注释！
     */
}

``` 


