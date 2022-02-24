import React, { useState, useEffect, useCallback } from 'react';
import ReportContext from '../Components/Store/report-context';

function useGetData(url, allKeys, dataDepend = "")	{
    const [alldata, setAlldata] = useState([]);
    const fetchDataHandler = async () => {
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      const allInnerData = [];
      for (const key in data) {
  			var obj = Object.create({});
      		for (const singleKey of allKeys) {
            if (singleKey == 'ItemDate'){
              var d = new Date(data[key][singleKey]);
              obj['month'] = d.getMonth()+1;
              obj['day'] = d.getUTCDate();
              obj['year'] = d.getFullYear();
            }else{
      		    obj[singleKey] = data[key][singleKey];
            }
          }
	        allInnerData.push(obj);
      }
        setAlldata(allInnerData);
    } catch (error) {
      
    }
  }

	useEffect(() => {
	    fetchDataHandler();
      return () => {
        setAlldata([]); // This worked for me
      };
	}, [dataDepend]);

  return {alldata, dataDepend};
}

export default useGetData;