#String 类

String 类对象代表不可变的Unicode字符序列，因此我们可以将String对象称为“不可变对象”。


String类常用的方法有

   1. String类的下述方法能创建并返回一个新的String对象: concat()、 replace()、substring()、 toLowerCase()、 toUpperCase()、trim()。

   2. 提供查找功能的有关方法: endsWith()、 startsWith()、 indexOf()、lastIndexOf()。

   3. 提供比较功能的方法: equals()、equalsIgnoreCase()、compareTo()。

   4. 其它方法: charAt() 、length()。
      
      
        public class TestString2 {
            public static void main(String[] args) {
                //编译器做了优化,直接在编译的时候将字符串进行拼接
                String str1 = "hello" + " java";//相当于str1 = "hello java";
                String str2 = "hello java";
                System.out.println(str1 == str2);//true
                String str3 = "hello";
                String str4 = " java";
                //编译的时候不知道变量中存储的是什么,所以没办法在编译的时候优化
                String str5 = str3 + str4;
                System.out.println(str2 == str5);//false
            }
        }


#StringBuffer和StringBuilder

StringBuffer和StringBuilder非常类似，均代表可变的字符序列。 这两个类都是抽象类AbstractStringBuilder的子类


区别：

      1. StringBuffer JDK1.0版本提供的类，线程安全，做线程同步检查， 效率较低。

      2. StringBuilder JDK1.5版本提供的类，线程不安全，不做线程同步检查，因此效率较高。 建议采用该类。

常用方法列表：

<font color=red>
1. 重载的public StringBuilder append(…)方法<br>
  可以为该StringBuilder 对象添加字符序列，仍然返回自身对象。<br>
2. 方法 public StringBuilder delete(int start,int end)<br>
  可以删除从start开始到end-1为止的一段字符序列，仍然返回自身对象。<br>
3. 方法 public StringBuilder deleteCharAt(int index)<br>
  移除此序列指定位置上的 char，仍然返回自身对象。<br>
4. 重载的public StringBuilder insert(…)方法
  可以为该StringBuilder 对象在指定位置插入字符序列，仍然返回自身对象。<br>
5. 方法 public StringBuilder reverse()<br>
  用于将字符序列逆序，仍然返回自身对象。<br>
6. 方法 public String toString() 返回此序列中数据的字符串表示形式。<br>
7. 和 String 类含义类似的方法：<br>
</font>






        
        public class TestStringBufferAndBuilder 1{
            public static void main(String[] args) {
                /**StringBuilder*/
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < 7; i++) {
                    sb.append((char) ('a' + i));//追加单个字符
                }
                System.out.println(sb.toString());//转换成String输出
                sb.append(", I can sing my abc!");//追加字符串
                System.out.println(sb.toString());
                /**StringBuffer*/
                StringBuffer sb2 = new StringBuffer("中华人民共和国");
                sb2.insert(0, "爱").insert(0, "我");//插入字符串
                System.out.println(sb2);
                sb2.delete(0, 2);//删除子字符串
                System.out.println(sb2);
                sb2.deleteCharAt(0).deleteCharAt(0);//删除某个字符
                System.out.println(sb2.charAt(0));//获取某个字符
                System.out.println(sb2.reverse());//字符串逆序
            }
        }





