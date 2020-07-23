export enum Methods {
  checkConnect = 'checkConnect',
  checkRegKey = 'checkRegKey',
  documentBlocking = 'documentBlocking',
  generateRegKey = 'generateRegKey',
  registerOrganization = 'registerOrganization',
  registerUser = 'registerUser',
  sendInvitation = 'sendInvitation',
  setDocumentStatus = 'setDocumentStatus',
  setUserData = 'setUserData',
  setUserInfo = 'setUserInfo',
  //GET METHODS
  getWorkStages = 'getWorkStages',
  getWorkKindFolders = 'getWorkKindFolders',
  getDocPlanFilterList = 'getDocPlanFilterList',
  getDailyReportSortList = 'getDailyReportSortList',
  getNpvActs = 'getNpvActs', // (id)
  getNpvActDetails = 'getNpvActDetails', // (docId)
  getPlanConsoleData = 'getPlanConsoleData',
  getDRTechGear = 'getDRTooling',
  getBkvTypes = 'getBkvTypes',
  getContractDetails = 'getContractDetails',
  getContracts = 'getContracts',
  getCurrentUserInfo = 'getCurrentUserInfo',
  getDailyReports = 'getDailyReports',
  getDeposits = 'getDeposits',
  getDRBreakdownInstrument = 'getDRBreakdownInstrument',
  getDRCasingNKT = 'getDRCasingNKT',
  getDRChisel = 'getDRChisel',
  getDRChiselDrillHead = 'getDRChiselDrillHead',
  getDRCleanSystemWork = 'getDRCleanSystemWork',
  getDRDieselConsumption = 'getDRDieselConsumption',
  getDRDieselWork = 'getDRDieselWork',
  getDRDrillInstrumentKnbkElements = 'getDRDrillInstrumentKnbkElements',
  getDRDrillMortar = 'getDRDrillMortar',
  getDRDrillMortarLoss = 'getDRDrillMortarLoss',
  getDRDrillMortarPrep = 'getDRDrillMortarPrep',
  getDRDrillMortarVolume = 'getDRDrillMortarVolume',
  getDRDrillPumpWork = 'getDRDrillPumpWork',
  getDReportKinds = 'getDReportKinds',
  getDReportTypes = 'getDReportTypes',
  getDrillingRigs = 'getDrillingRigs',
  getDRKnbk = 'getDRKnbk',
  getDRMaterialConsumption = 'getDRMaterialConsumption',
  getDRSpecialMachineryWork = 'getDRSpecialMachineryWork',
  getDRStaff = 'getDRStaff',
  getDRTechEquipment = 'getDRTechEquipment',
  getDRTechOpers = 'getDRTechOpers',
  getDRTooling = 'getDRTooling',
  getDRWorkLine = 'getDRWorkLine',
  getFiles = 'getFiles',
  getFrameData = 'getFrameData',
  getLicenseInfo = 'getLicenseInfo',
  getLicenseParams = 'getLicenseParams',
  getMortarTypes = 'getMortarTypes',
  getMyRegKeys = 'getMyRegKeys',
  getNomenclature = 'getNomenclature',
  getNomenclatureTypes = 'getNomenclatureTypes',
  getNpvActKinds = 'getNpvActKinds',
  getNpvCauses = 'getNpvCauses',
  getOrganizations = 'getOrganizations',
  getOrganizationsToSelect = 'getOrganizationsToSelect',
  getParam = 'getParam',
  getPerformerLists = 'getPerformerLists',
  getPlanDetails = 'getPlanDetails',
  getPlans = 'getPlans',
  getProjects = 'getProjects',
  getRoles = 'getRoles',
  getScenarios = 'getScenarios',
  getStatuses = 'getStatuses',
  getSupervisorPrescriptDetails = 'getSupervisorPrescriptDetails',
  getSupervisorPrescripts = 'getSupervisorPrescripts',
  getUnits = 'getUnits',
  getUserInfo = 'getUserInfo',
  getUsers = 'getUsers',
  getWorkClassifier = 'getWorkClassifier',
  getWorkKinds = 'getWorkKinds',
  getWorkObjectExecutors = 'getWorkObjectExecutors',
  getWorkObjectHoles = 'getWorkObjectHoles',
  getWorkObjects = 'getWorkObjects',
  getWorkPerformers = 'getWorkPerformers',
  //IUD METHODS
  iudNpvCause = 'iudNpvCause', //(id, name, flag)
  iudNpvActKind = 'iudNpvActKind', // (id, name, flag)
  iudNpvAct = 'iudNpvAct', // (id, flag, workObjectId, kindId, startDate, endDate, npvDescription, workResult)
  iudNpvActDetail = 'iudNpvActDetail', // (id, flag, docId, dailyReportDetailId)
  iudDRTechGear = 'iudDRTooling',
  iudContract = 'iudContract',
  iudContractDetail = 'iudContractDetail',
  iudDailyReport = 'iudDailyReport',
  iudDeposit = 'iudDeposit',
  iudDRBreakdownInstrument = 'iudDRBreakdownInstrument',
  iudDRCasingNKT = 'iudDRCasingNKT',
  iudDRChisel = 'iudDRChisel',
  iudDRChiselDrillHead = 'iudDRChiselDrillHead',
  iudDRCleanSystemWork = 'iudDRCleanSystemWork',
  iudDRDieselConsumption = 'iudDRDieselConsumption',
  iudDRDieselWork = 'iudDRDieselWork',
  iudDRDrillInstrumentKnbkElements = 'iudDRDrillInstrumentKnbkElements',
  iudDRDrillMortar = 'iudDRDrillMortar',
  iudDRDrillMortarLoss = 'iudDRDrillMortarLoss',
  iudDRDrillMortarPrep = 'iudDRDrillMortarPrep',
  iudDRDrillMortarVolume = 'iudDRDrillMortarVolume',
  iudDRDrillPumpWork = 'iudDRDrillPumpWork',
  iudDrillingRig = 'iudDrillingRig',
  iudDRKnbk = 'iudDRKnbk',
  iudDRMaterialConsumption = 'iudDRMaterialConsumption',
  iudDRSpecialMachineryWork = 'iudDRSpecialMachineryWork',
  iudDRStaff = 'iudDRStaff',
  iudDRTechEquipment = 'iudDRTechEquipment',
  iudDRTechOper = 'iudDRTechOper',
  iudDRTooling = 'iudDRTooling',
  iudDRWorkLine = 'iudDRWorkLine',
  iudFile = 'iudFile',
  iudHoleTemplate = 'iudHoleTemplate',
  iudHoleTemplateDetail = 'iudHoleTemplateDetail',
  iudMortarType = 'iudMortarType',
  iudNomenclature = 'iudNomenclature',
  iudNomenclatureType = 'iudNomenclatureType',
  iudOrganization = 'iudOrganization',
  iudPlan = 'iudPlan',
  iudPlanDetail = 'iudPlanDetail',
  iudProject = 'iudProject',
  iudScenario = 'iudScenario',
  iudSupervisorPrescript = 'iudSupervisorPrescript',
  iudSupervisorPrescriptDetail = 'iudSupervisorPrescriptDetail',
  iudUnit = 'iudUnit',
  iudUser = 'iudUser',
  iudWorkClassifier = 'iudWorkClassifier',
  iudWorkKind = 'iudWorkKind',
  iudWorkObject = 'iudWorkObject',
  iudWorkObjectExecutor = 'iudWorkObjectExecutor',
  iudWorkObjectHole = 'iudWorkObjectHole',
  iudWorkPerformer = 'iudWorkPerformer',
  copyDocument = 'copyDocument',
  //REPORTS
  repDepthDayGraph = 'repDepthDayGraph',
  repCalendarTimeBalance = 'repCalendarTimeBalance',
  repCalendarTimeBalanceDiag = 'repCalendarTimeBalanceDiag',
  repConstructionTimeSchedule = 'repConstructionTimeSchedule',
  repConstructionTimeScheduleShort = 'repConstructionTimeScheduleShort',
  repDaySummary = 'repDaySummary',
}