package ggc_monitor.ggcmonitor.model;

import javax.persistence.Column;
import java.util.Date;

public class FeigeSmsEntity  {

    @Column(name = "[Mobile]")
    private String Mobile;

    @Column(name = "Content")
    private String Content;

    @Column(name = "Status")
    private int Status;

    @Column(name = "CreateTime")
    private Date CreateTime;

    @Column(name = "SantoReportStatus")
    private int  SantoReportStatus;

    @Column(name = "SantoReportMsg")
    private String SantoReportMsg;

    @Column(name = "SantoReportTime")
    private Date SantoReportTime;

    public String getMobile() {
        return Mobile;
    }

    public void setMobile(String mobile) {
        Mobile = mobile;
    }

    public String getContent() {
        return Content;
    }

    public void setContent(String content) {
        Content = content;
    }

    public int getStatus() {
        return Status;
    }

    public void setStatus(int status) {
        Status = status;
    }

    public Date getCreateTime() {
        return CreateTime;
    }

    public void setCreateTime(Date createTime) {
        CreateTime = createTime;
    }

    public int getSantoReportStatus() {
        return SantoReportStatus;
    }

    public void setSantoReportStatus(int santoReportStatus) {
        SantoReportStatus = santoReportStatus;
    }

    public String getSantoReportMsg() {
        return SantoReportMsg;
    }

    public void setSantoReportMsg(String santoReportMsg) {
        SantoReportMsg = santoReportMsg;
    }

    public Date getSantoReportTime() {
        return SantoReportTime;
    }

    public void setSantoReportTime(Date santoReportTime) {
        SantoReportTime = santoReportTime;
    }
}