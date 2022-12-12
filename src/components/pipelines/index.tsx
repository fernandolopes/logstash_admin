import { render } from "@testing-library/react";
import React, { Component } from "react";


export default function Pipeline(props: any) {

    return (
        <div className="row">
            <div className="col-lg-3">
                <div className="ibox">
                    <div className="ibox-title">
                        <div className="ibox-tools">
                            <span className="label label-primary float-right">Status</span>
                        </div>
                        <h5>Host:</h5> <span>149b6b455f96</span>
                    </div>
                    <div className="ibox-content">
                        {/* <h1 className="no-margins">40 886,200</h1> */}
                        <div>
                            <div className="stat-percent font-bold text-success">7.17.5 <i className="fa fa-inbox"></i></div>
                            <small>Version</small>
                        </div>
                        <div>
                            <div className="stat-percent font-bold text-success">0.0.0.0:9600 <i className="fa fa-wifi"></i></div>
                            <small>Http address</small>
                        </div>

                    </div>
                    <div className="ibox-footer">
                        <h5>Pipeline</h5>
                        <div>
                            <div className="stat-percent font-bold text-success">8 <i className="fa fa-gears"></i></div>
                            <small>Workers</small>
                        </div>
                        <div>
                            <div className="stat-percent font-bold text-success">125 <i className="fa fa-fire"></i></div>
                            <small>Batch size</small>
                        </div>
                        <div>
                            <div className="stat-percent font-bold text-success">50 <i className="fa fa-clock-o"></i></div>
                            <small>Batch delay</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-3">
                <div className="ibox">
                    <div className="ibox-title">
                        <div className="ibox-tools">
                            <span className="label label-danger float-right">Status</span>
                        </div>
                        <h5>Host:</h5> <span>7864433aferrb11</span>
                    </div>
                    <div className="ibox-content">
                        {/* <h1 className="no-margins">40 886,200</h1> */}
                        <div>
                            <div className="stat-percent font-bold text-success">8.0.0 <i className="fa fa-inbox"></i></div>
                            <small>Version</small>
                        </div>
                        <div>
                            <div className="stat-percent font-bold text-success">0.0.0.0:9600 <i className="fa fa-wifi"></i></div>
                            <small>Http address</small>
                        </div>

                    </div>
                    <div className="ibox-footer">
                        <h5>Pipeline</h5>
                        <div>
                            <div className="stat-percent font-bold text-success">0 <i className="fa fa-gears"></i></div>
                            <small>Workers</small>
                        </div>
                        <div>
                            <div className="stat-percent font-bold text-success">0 <i className="fa fa-fire"></i></div>
                            <small>Batch size</small>
                        </div>
                        <div>
                            <div className="stat-percent font-bold text-success">0 <i className="fa fa-clock-o"></i></div>
                            <small>Batch delay</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}