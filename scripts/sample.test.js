import http from 'k6/http';
import { sleep,check } from 'k6';

export function setup(){
  console.log("SETUP");
}

export default function () {
  let res = http.get('https://test.k6.io');
  check(res,{
      "status is good":(r)=> r.status === 201
  })
  sleep(1);
}

export function teardown(data){
  console.log("TEARDOWN");
}