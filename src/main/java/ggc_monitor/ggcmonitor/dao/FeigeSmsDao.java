package ggc_monitor.ggcmonitor.dao;

import ggc_monitor.ggcmonitor.model.FeigeSmsEntity;

import java.util.List;

public interface FeigeSmsDao {
    /*
   查所有
   return List<Person>
    */
    List<FeigeSmsEntity> getAll();
}
