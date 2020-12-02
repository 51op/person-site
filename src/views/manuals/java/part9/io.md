#IO流


<font color=red>

当程序需要读取数据源的数据时，就会通过IO流对象开启一个通向数据源的流，通过这个IO流对象的相关方法可以顺序读取数据源中的数据
</font>


---------------

使用流读取文件内容(不规范的写法，仅用于测试)

``` 
import java.io.*;
public class TestIO1 {
    public static void main(String[] args) {
        try {
            //创建输入流
            FileInputStream fis = new FileInputStream("/tmp/a.txt"); // 文件内容是：abc
            //一个字节一个字节的读取数据
            int s1 = fis.read(); // 打印输入字符a对应的ascii码值97
            int s2 = fis.read(); // 打印输入字符b对应的ascii码值98
            int s3 = fis.read(); // 打印输入字符c 对应的ascii码值99
            int s4 = fis.read(); // 由于文件内容已经读取完毕，返回-1
            System.out.println(s1);
            System.out.println(s2);
            System.out.println(s3);
            System.out.println(s4);
            // 流对象使用完，必须关闭！不然，总占用系统资源，最终会造成系统崩溃！
            fis.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```
   1. 上面中我们读取的文件内容是已知的，因此可以使用固定次数的“int s= fis.read();”语句读取内容，但是在实际开发中通常我们根本不知道文件的内容，因此我们在读取的时候需要配合while循环使用。

   2.  为了保证出现异常后流的正常关闭，通常要将流的关闭语句要放到finally语句块中，并且要判断流是不是null

``` 
import java.io.*;
public class TestIO2 {
    public static void main(String[] args) {
        FileInputStream fis = null;
        try {
            fis = new FileInputStream("/tmp/a.txt"); // 内容是：abc
            StringBuilder sb = new StringBuilder();
            int temp = 0;
            //当temp等于-1时，表示已经到了文件结尾，停止读取
            while ((temp = fis.read()) != -1) {
                sb.append((char) temp);
            }
            System.out.println(sb);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                //这种写法，保证了即使遇到异常情况，也会关闭流对象。
                if (fis != null) {
                    fis.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
    
```