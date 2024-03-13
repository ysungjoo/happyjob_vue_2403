import axios from "axios";

const bizUtil = {
  /**
   * 공통 콤보 조회
   *
   * @param {String} comtype (필수) 콤보리스트 타입
   * @param {String} searchkey (선택) 조회조건
   * @param {String} callback (필수) callback 함수
   * @returns {String} 카드사명
   */
  selectComCombo: (comtype, searchkey, callback) => {
    let params = new URLSearchParams();
    params.append("comtype", comtype);
    params.append("searchkey", searchkey);

    axios.post("/system/selectComCombo.do", params)
        .then(function (response) {
          callback(response.data.list);
        })
        .catch(function (error) {
          alert("에러! API 요청에 오류가 있습니다. " + error);
        });
  }
}

export default bizUtil;