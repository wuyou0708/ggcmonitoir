package ggc_monitor.ggcmonitor.util;

import java.io.IOException;
import java.io.InputStream;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class SqlSessionUtil {

    private static SqlSessionFactory sessionFactory;

    public static SqlSession getSqlSession() {
        try {
            // 流关闭了吗？？
            InputStream iStream = Resources.getResourceAsStream("mybatis-config.xml");
            System.out.println(iStream.toString());
            if (sessionFactory == null) {
                sessionFactory = new SqlSessionFactoryBuilder().build(iStream);
            }
            return sessionFactory.openSession();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}