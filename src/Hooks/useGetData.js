import React, { useState, useEffect, useCallback } from 'react';
import ReportContext from '../Components/Store/report-context';

function useGetData(url, setData, allKeys)	{
    const fetchDataHandler = useCallback(async () => {
    const allDataWrapper = [];
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const allData = [];

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
	        allData.push(obj);
      }
        return setData(allData);
    } catch (error) {
      
    }
  }, []);

	useEffect(() => {
	    fetchDataHandler();
	}, [fetchDataHandler]);
}

export default useGetData;