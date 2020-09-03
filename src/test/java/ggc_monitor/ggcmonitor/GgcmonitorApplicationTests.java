package ggc_monitor.ggcmonitor;

import ggc_monitor.ggcmonitor.dao.FeigeSmsDao;
import ggc_monitor.ggcmonitor.model.FeigeSmsEntity;
import ggc_monitor.ggcmonitor.util.SqlSessionUtil;
import org.apache.ibatis.session.SqlSession;
import org.junit.After;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class GgcmonitorApplicationTests {

    public SqlSession session;
    public FeigeSmsDao dao;


    @Test
    public void test02() {
        session = SqlSessionUtil.getSqlSession();
        dao = session.getMapper(FeigeSmsDao.class);
        List<FeigeSmsEntity> list = dao.getAll();
        System.out.println("行数："+list.size());
        if (session != null) {
            session.close();
            session = null;
        }
    }

}
