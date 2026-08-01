import React from 'react'
import '../../Css/nursery.css'
import ReactECharts from "echarts-for-react";
import Treeplantationreport from './Treeplantationreport';

const NurseryStock = () => {

    const option = {
        title: {
            text: "સ્ટોક રિપોર્ટ",
            left: "center",
        },

        tooltip: {
            trigger: "axis",
        },

        xAxis: {
            type: "category",
            data: ["લીમડો", "પીપળો ", "વડ ", "આસોપાલવ", "તુલસી", "અન્ય"],
        },

        yAxis: {
            type: "value",
        },

        series: [
            {
                data: [50, 100, 200, 320, 150, 250],
                type: "bar",
                smooth: true,
            },
        ],
    };

    return (
        <div>
            <div className='p-4'>
                <h3>વૃક્ષારોપણ અને નર્સરી મેનેજમેન્ટ</h3>
                <p>તમારા નર્સરી સ્ટોક અને વૃક્ષારોપણની કામગીરીનું વિગતવાર નિરીક્ષણ કરો.</p>
                <div className='row'>
                    <div className='card  col-7'>
                        <div className='d-flex justify-content-between py-3'>
                            <h6>સ્ટોક હિસ્ટ્રી અને આંકડા</h6>
                            <h6>
                                <select>
                                    <option value="">છેલ્લા 7 દિવસ</option>
                                    <option value="">છેલ્લા 30 દિવસ</option>
                                </select>
                            </h6>
                        </div>
                        <div className='row pb-5'>
                            <div className=' col-4'>
                                <div className='nursarybox'>
                                    <p className='m-0'>કુલ ઉપલબ્ધ રોપા</p>
                                    <h3 style={{ color: "#006B2C" }} className='m-0 fw-bold'>12,450</h3>
                                    <p style={{ color: "#006B2C" }} className='m-0'>+12% ગત સપ્તાહ કરતા</p>
                                </div>

                            </div>
                            <div className=' col-4'>
                                <div className='nursarybox'>
                                    <p className='m-0'>આજે થયેલું વાવેતર</p>
                                    <h3 style={{ color: "#006B2C" }} className='m-0 fw-bold'>450</h3>
                                    <p className='m-0'>2 અલગ અલગ જગ્યાએ</p>
                                </div>

                            </div>
                            <div className=' col-4'>
                                <div className='nursarybox'>
                                    <p style={{ color: "#6b1000ff" }} className='m-0'>ઓછો સ્ટોક (Alert)</p>
                                    <h3 style={{ color: "#6b1000ff" }} className='m-0 fw-bold'>03</h3>
                                    <p style={{ color: "#6b1000ff" }} className='m-0'>તત્કાલ જરૂરિયાત</p>
                                </div>

                            </div>
                        </div>
                        <div className='card mb-3'>
                        <ReactECharts
                            option={option}
                            style={{ height: "400px", width: "100%" }}
                        />
                        </div>
                        
                    </div>
                    <div className='col-5'>
                    <div>
                      Nursery Details   
                    </div>
                    </div>
                    <div>

                    </div>

                </div>

                <div>
                   <Treeplantationreport/> 
                </div>
            </div>
        </div>
    )
}

export default NurseryStock