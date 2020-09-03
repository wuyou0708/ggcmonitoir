package ggc_monitor.ggcmonitor.controller;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import ggc_monitor.ggcmonitor.dao.FeigeSmsDao;
import ggc_monitor.ggcmonitor.model.FeigeSmsEntity;
import ggc_monitor.ggcmonitor.service.FeigeSmsService;
import ggc_monitor.ggcmonitor.util.SqlSessionUtil;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

@Controller
@RequestMapping("/sms")
public class SmsController {

    public SqlSession session;
    public FeigeSmsDao dao;

    @RequestMapping("/feigesms")
    public ModelAndView FeigeSms(@RequestParam(required = true, defaultValue = "1") Integer page,
                                 HttpServletRequest request) {

        ModelAndView newModel = new ModelAndView();
        newModel.setViewName("sms/feigesms");

        session = SqlSessionUtil.getSqlSession();
        dao = session.getMapper(FeigeSmsDao.class);

         PageHelper.startPage(page, 10);


        List<FeigeSmsEntity> smsList = dao.getAll();
        PageInfo<FeigeSmsEntity> p = new PageInfo<FeigeSmsEntity>(smsList);

        newModel.addObject("list", smsList);
        newModel.addObject("page", p);
        return newModel;
    }
}
