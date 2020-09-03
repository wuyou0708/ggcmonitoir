package ggc_monitor.ggcmonitor.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/home")
public class HomeController {

    @RequestMapping("/index")
    public String home(){
        return "home/index";
    }

    @RequestMapping("/main")
    public String main(){
        return "home/main";
    }
}
