import React, { useContext, useEffect, useState } from "react";
import { AppStoreContext } from "../context/createcontext";
import { AppFilterContext } from "../context/filterdatacontext";

const Shopleftbar = () => {
  const { data, changedata } = useContext(AppStoreContext);
  const { filteredData, changeFilterData } = useContext(AppFilterContext);
  const { checkedData, changecheckedData } = useContext(AppFilterContext);

  useEffect(() => {
    changeFilterData(data);
  }, [data]);

  const ShowAll = () => {
    let abc = []
    checkedData.map((x)=>{
      x.checked = false;
      abc.push(x)
    })
    changecheckedData(abc)
    changeFilterData(data);
  };

  const [filter, setfilter] = useState([]);

  const handelChange = (e) => {
    let Arr = [];
    let abc = JSON.parse(JSON.stringify(filter));
    console.log(e.target.value);
    console.log(e.target.checked);
    let newRR = [];
    checkedData.map((data) => {
      if (e.target.value === data?.type) {
        data.checked = !data.checked;
      }
      newRR.push(data);
    });

    // if (e.target.checked) {
    //   abc.map((x) => {
    //     Arr.push(x);
    //   });
    //   Arr.push(e.target.value);
    // } else {
    //   abc.map((x) => {
    //     if (x !== e.target.value) {
         
    //       Arr.push(x);
    //       //console.log(Arr)
    //     }
    //   });
    // }
    setfilter(newRR);
    
    let myArr = [];
    data.map((x) => {
      newRR.map((item)=>{
        if (x.type === item.type &&  item.checked) {
        myArr.push(x);
        }
      })
      // if (newRR.includes(x?.type)) {
      //   myArr.push(x);
      // }
    });
    changeFilterData(myArr);
  };
  //console.log(filter)

  return (
    <div>
      <div className="shopL_body">
        <div>
          <h3
            onClick={() => {
              ShowAll();
            }}
          >
            ALL
          </h3>
        </div>
        <hr />
        <div className="catagories">
          <h5>Catagories</h5>
          {checkedData.map((item) => {
            //console.log(item.checked);

            return (
              <span className="row">
                <div className="col-2">
                  <input
                    type="checkbox"
                    value={item.type}
                    checked={item?.checked.toString() === "true" ? true : false}
                    onChange={handelChange}
                  />
                </div>
                <div className="col-10">{item.type}</div>
              </span>
            );
          })}
          <span className="row">Merinated Meat</span> <br />
          <span className="row">News and Offers</span> <br />
          <span className="row">Meat Boxes</span> <br />
          <span className="row">Halal</span>
        </div>
      </div>
    </div>
  );
};

export default Shopleftbar;
