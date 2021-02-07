import axios from "axios";
//const ROOT_URL = "http://localhost:8080/ge/api";
const ROOT_URL = "https://ge-backend-deploy.herokuapp.com";

export default {
  login: function(request) {
    return axios.post(`${ROOT_URL}/dashboard/auth/login`, request);
  },

  createCustomer: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/customer/create`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  fetchAllActiveCustomer: function(token) {
    return axios.get(`${ROOT_URL}/dashboard/customer/getAllActiveCustomer`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  fetchAllInActiveCustomer: function(token) {
    return axios.get(`${ROOT_URL}/dashboard/customer/getAllInActiveCustomer`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  fetchCustomer: function(customerId, token) {
    return axios.get(`${ROOT_URL}/dashboard/customer/getCustomer`, {
      params: { customerId: customerId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  createEMI: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/emi/createEmi`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  customerDefaulter: function(token) {
    return axios.get(`${ROOT_URL}/dashboard/customer/customerDefaulter`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  createExpenditure: function(request,token) {
    return axios.post(`${ROOT_URL}/dashboard/expenditure/create`,request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  fetchExpenditure:function(request,token) {
    return axios.get(`${ROOT_URL}/dashboard/expenditure/fetchExpenditure`, {
      params: { expMonthYear: request},
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  fetchCustomerByMonth:function(request,token) {
    return axios.get(`${ROOT_URL}/dashboard/customer/fetchCustomerByMonth`, {
      params: { productMonthYear: new Date(request)},
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },




  updatePatient: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/patients/update`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getPatientList: function(token, mgId) {
    return axios.get(`${ROOT_URL}/dashboard/patients/list`, {
      params: { mgId: mgId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getPatientListInactive: function(token, mgId) {
    return axios.get(`${ROOT_URL}/dashboard/patients/inactivelist`, {
      params: { mgId: mgId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getPatientListForCcRole: function(token, mgId, ccId) {
    return axios.get(`${ROOT_URL}/dashboard/patients/listForCcRole`, {
      params: { mgId: mgId, ccId: ccId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getPatientListForCcRoleInactive: function(token, mgId, ccId) {
    return axios.get(`${ROOT_URL}/dashboard/patients/listForCcRoleInactive`, {
      params: { mgId: mgId, ccId: ccId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  fetchCareCoordinatePatientList: function(token, ccId) {
    return axios.get(`${ROOT_URL}/dashboard/patients/ccPatientList`, {
      params: { ccId: ccId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getPatient: function(token, patientId) {
    return axios.get(`${ROOT_URL}/dashboard/patients/get`, {
      params: { patientId: patientId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  savePatientInsurance: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/patients/addPatientInsurance`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  uploadPatientInsuranceFiles: function(token, file, pInId, fileId) {
    return axios.post(`${ROOT_URL}/dashboard/patients/uploadPIFiles`, file, {
      params: { pInId: pInId, fileId: fileId },
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
  },

  savePatientEContacts: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/patients/addPatientEmergencyCont`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  savePatientPharmacy: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/patients/addPharmacy`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  saveRpmTimerInfo: function(request, token) {
    //saveRpmTime: function (request, token) {
    return axios.post(`${ROOT_URL}/dashboard/timer/saverpm`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  saveCcmTimerInfo: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/timer/saveccm`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  fetchRpmTimerInfo: function(token, patientId) {
    return axios.get(`${ROOT_URL}/dashboard/timer/fetchrpminfo`, {
      params: { patientId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  fetchCcmTimerInfo: function(token, patientId) {
    return axios.get(`${ROOT_URL}/dashboard/timer/fetchccminfo`, {
      params: { patientId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  fetchRpmTime: function(token, patientId) {
    return axios.get(`${ROOT_URL}/dashboard/timer/fetchrpmtime`, {
      params: { patientId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  fetchCcmTime: function(token, patientId) {
    return axios.get(`${ROOT_URL}/dashboard/timer/fetchccmtime`, {
      params: { patientId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  updateRpmTime: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/timer/updateRpmTime`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  updateCcmTime: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/timer/updateCcmTime`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  createVitalSetup: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/vital/setup`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  updateVitalSetup: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/vital/update`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getVitalSetupDataList: function(token, patientId) {
    return axios.get(`${ROOT_URL}/dashboard/vital/list`, {
      params: { patientId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  search: function(token, query, mgId) {
    return axios.get(`${ROOT_URL}/dashboard/patients/search`, {
      params: { q: query, mgId: mgId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  searchForCcRole: function(token, query, mgId, ccId) {
    return axios.get(`${ROOT_URL}/dashboard/patients/searchForCcRole`, {
      params: { q: query, mgId: mgId, ccId: ccId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  advanceSearch: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/patients/asearch`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  createOrganization: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/admin/createOrg`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  updateOrganization: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/admin/updateOrg`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getOrganizationList: function(token) {
    return axios.get(`${ROOT_URL}/dashboard/admin/orgList`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  createMedicalGroup: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/admin/createMedicalGroup`,
      request,
      {
        params: { orgId: request.orgId },
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  },

  updateMedicalGroup: function(request, token) {
    return axios.post(
      `${ROOT_URL}/dashboard/admin/updateMedicalGroup`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  getMedicalGroupList: function(token) {
    return axios.get(`${ROOT_URL}/dashboard/admin/medicalGroupList`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getUserRolesList: function(token) {
    return axios.get(`${ROOT_URL}/dashboard/user/userRolesList`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getUserList: function(token) {
    return axios.get(`${ROOT_URL}/dashboard/user/userList`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getSeverityList: function(token, mgId) {
    return axios.get(`${ROOT_URL}/dashboard/severity/list`, {
      params: { mgId: mgId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getSeverityListForCcRole: function(token, mgId, ccId) {
    return axios.get(`${ROOT_URL}/dashboard/severity/listForCcRole`, {
      params: { mgId: mgId, ccId: ccId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getSeverityCount: function(token, mgId) {
    return axios.get(`${ROOT_URL}/dashboard/severity/count`, {
      params: { mgId: mgId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getSeverityCountForCcRole: function(token, mgId, ccId) {
    return axios.get(`${ROOT_URL}/dashboard/severity/countForCcRole`, {
      params: { mgId: mgId, ccId: ccId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getSevenDayCountMethod: function(token, mgId) {
    return axios.get(`${ROOT_URL}/dashboard/severity/sevendaycount`, {
      params: { mgId: mgId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  addNonComplianceComment: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/severity/addNonComplianceComment`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  addNormalLowCriticalComment: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/severity/addNormalLowCriticalComment`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  getCareCoordinatorList: function(token) {
    return axios.get(`${ROOT_URL}/dashboard/user/ccList`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getUserMappingList: function(token, userid) {
    return axios.get(`${ROOT_URL}/dashboard/user/userMapping`, {
      params: { userid: userid },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getMgMappingForAdmin: function(token) {
    return axios.get(`${ROOT_URL}/dashboard/user/mgMappingForAdmin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  createUser: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/user/create`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  updateUserWithMg: function(token, request) {
    var req = {
      user: request.user,
      mgMappingIdList: request.mgMappingIdList,
      mgDefaultId: request.mgDefaultId,
    };
    return axios.post(`${ROOT_URL}/dashboard/user/updateUserWithMg`, req, {
      params: { removelIds: request.removelIds },

      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  updateUser: function(token, request) {
    return axios.get(`${ROOT_URL}/dashboard/user/update`, {
      params: { userId: request.userId, userStatus: request.userStatus },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getUser: function(token, email) {
    return axios.get(`${ROOT_URL}/dashboard/user/get`, {
      params: {
        email: email,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  createPcp: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/admin/createPcp`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  updatePcp: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/admin/updatePcp`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  addVitalData: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/vital/save`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getPcpList: function(token) {
    return axios.get(`${ROOT_URL}/dashboard/admin/pcpList`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  // RPM API's

  getRpmNotes: function(token, patientId) {
    return axios.get(`${ROOT_URL}/dashboard/rpm/getRpmNotes`, {
      params: { patientId: patientId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  createRpmNotes: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/rpm/createRpmNotes`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  uploadRpmDocs: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/rpm/createRpmDocs`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  uploadRpmDocFile: function(token, file, rpdid) {
    return axios.post(
      `${ROOT_URL}/dashboard/rpm/uploadRpmDocFile?rpmDocId=` + rpdid,
      file,
      {
        // params: { 'rpmDocId': rpdid },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },

  downloadDocument: function(token, documentId) {
    return axios.get(`${ROOT_URL}/dashboard/rpm/downloadRpmDocFile`, {
      params: { documentId: documentId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob",
    });
  },

  downloadPlrImage: function(token, request) {
    return axios.get(`${ROOT_URL}/dashboard/rpm/downloadPlrImage`, {
      params: { rpmPlrId: request.rpmPlrId, fileName: request.fileName },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob",
    });
  },

  createRpmPlr: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/rpm/createRpmPlr`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  uploadRpmPlrFiles: function(token, file, rpmPlrId, fileId) {
    return axios.post(`${ROOT_URL}/dashboard/rpm/uploadRpmPlrFiles`, file, {
      params: { rpmPlrId: rpmPlrId, fileId: fileId },
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
  },

  createDiagnosisInfoRpm: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/rpm/saveDiagnosis`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  saveSurgeryInfoRpm: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/rpm/saveSurgery`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  addCcmTopConcern: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/ccm/topConcerns`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  addCcmExamVaccination: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/ccm/examvaccination`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  addCcmNotes: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/ccm/ccmnotes`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  addCcmAssessmentDomain: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/ccm/assessmentdomain`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  addCcmTreatmentGoals: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/ccm/ccmPatientGoals`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  addCcmOutcomePrognosis: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/ccm/outcomeprognosis`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  addCcmPlannedFrequency: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/ccm/ccmPfrequency`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  addCcmCareManager: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/ccm/ccmCareManager`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  addPlannedFrequency: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/ccm/ccmPfrequency`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  addSummaryLifecycle: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/ccm/ccmSummaryLifeCycle`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  addCcmSymptom: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/ccm/ccmSymptom`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  addCcmHealthCareProvider: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/ccm/ccmHealthCareProvider`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  addCcmResourceAndSupport: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/ccm/ccmResourceAndSupport`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  addccmMyMedication: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/ccm/ccmMyMedication`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  addCcmMyConditions: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/ccm/ccmMyConditions`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getNotificationList: function(token, userId) {
    return axios.get(`${ROOT_URL}/dashboard/notification/getList`, {
      params: { careCoordinatorId: userId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  markNotificationCompleted: function(token, csrId) {
    return axios.get(`${ROOT_URL}/dashboard/notification/markCompleted`, {
      params: { csrId: csrId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  careCoordinatorPitentsMapping: function(token, request, ccId) {
    return axios.post(
      `${ROOT_URL}/dashboard/patients/careCoordinatorPitentsMapping`,
      request,
      {
        params: { ccId: ccId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  //PMQ

  addPmqPharmacy: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/pmq/createPmqPharmacy`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  addPmqMedications: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/pmq/createPmqMedications`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  createPmqDailyActivity: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/pmq/createPmqActivity`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  savePmqHospitalization: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/pmq/hospitalization`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  savePmqGeneral: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/pmq/general`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  savePmqNotes: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/pmq/createNotes`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  createTask: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/tickets/create`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  uploadFileTask: function(token, file, ntDocId) {
    return axios.post(
      `${ROOT_URL}/dashboard/tickets/uploadfile?ticketId=` + ntDocId,
      file,
      {
        // params: { 'rpmDocId': rpdid },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },

  updateTask: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/tickets/update`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  downloadTimeLogReport: function(request, token) {
    return axios.post(
      `${ROOT_URL}/dashboard/report/downloadTimeLogReport`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      }
    );
  },

  downloadTaskReport: function(request, token) {
    return axios.post(
      `${ROOT_URL}/dashboard/report/downloadtaskreport`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      }
    );
  },

  downloadVitalReport: function(token, request) {
    return axios.get(`${ROOT_URL}/dashboard/report/downloadVitalReport`, {
      params: {
        patientId: request.patientId,
        deviceType: request.deviceType,
        fromDate: request.fromDate,
        toDate: request.toDate,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob",
    });
  },

  fetchCareCoordinatorTasks: function(token, userId) {
    return axios.get(`${ROOT_URL}/dashboard/tickets/fetchcoordinatortickets`, {
      params: { userId: userId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  createAnemia: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/chronicdisease/anemia`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  createHypertension: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/hypertension`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  createAcuteMyocardial: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/acutemyocardial`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  createAtrialFibrillation: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/atrialfibrillation`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  createCOPD: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/chronicdisease/copd`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  createHyperlipidemia: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/hyperlipidemia`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  createHeartFailure: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/heartfailure`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  createDiabetes: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/diabetes`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  createOsteoporosis: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/osteoporosis`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  createOsteoarthritis: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/osteoarthritis`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  createAlzheimers: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/alzheimers`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  createKidneyDisease: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/kidneydisease`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  createGlaucoma: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/glaucoma`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  createHpf: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/hippelvicfracture`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  creatDepression: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/depression`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  createHypothroidism: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/hypothroidism`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  createStroke: function(token, request) {
    return axios.post(`${ROOT_URL}/dashboard/chronicdisease/stroke`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  createRheumatoidArthritis: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/rheumatoidarthritis`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  createCataract: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/cataract`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  createBenignProstaticHyperplasia: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/benignProstaticHyperplasia`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  createAutismSpectrumDisorders: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/autismSpectrumDisorders`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  createCancerBreast: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/cancerBreast`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  createCDCancerColorectal: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/cDCancerColorectal`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  createCancerLung: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/cancerLung`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  createCancerProstate: function(token, request) {
    return axios.post(
      `${ROOT_URL}/dashboard/chronicdisease/cancerProstate`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  getNonCompReport: function(token, request) {
    return axios.get(`${ROOT_URL}/dashboard/report/downloadSeverityReport`, {
      params: {
        mgId: request.mgId,
        severityType: request.severityType,
        ccId: request.ccId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob",
    });
  },
  getCcmReport: function(token, request) {
    return axios.get(`${ROOT_URL}/dashboard/jsreport/ccmReport`, {
      params: {
        patientId: request.patientId,
        month: request.month,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob",
    });
  },
  getPMQReport: function(token, request) {
    return axios.get(`${ROOT_URL}/dashboard/jsreport/questionnaireReport`, {
      params: {
        patientId: request.patientId,
        month: request.month,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob",
    });
  },

  fetchPendingTask: function(token) {
    return axios.get(`${ROOT_URL}/dashboard/tickets/fetchpendingtasks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
