# 医联系患者版接口

### 诊所主页

    http://show.2qianwan.cn/app/v_patient/clinic/clinic_home/?id=xxx

    {
        errno: 0,
        data: {
            id: '1234',
            name: '北京张祥胜中医诊所',
            tel: '010-88886666',
            address: '定福家园南里',
            clinic_doctors: [
                {
                    id: '1234',
                    name: '张祥胜',
                    position: '主任医师',
                    skills: '各类骨科疾病的中医治疗',
                    replies: 13,
                    score: 4.3,
                    tickets: 217,
                    consultable: true,
                    canVisitPatient: true
                }
            ],
            honorary_doctors: [
                {
                    id: '1234',
                    name: '刘跃武',
                    position: '主任医师',
                    hosipital: '北京协和医院',
                    skills: '各类骨科疾病的中医治疗',
                    replies: 13,
                    score: 4.3,
                    tickets: 217,
                    consultable: true,
                    canVisitPatient: true
                }
            ]
        }
    }

### 医生主页

    http://show.2qianwan.cn/app/v_patient/clinic/doctor_home/?id=xxx

    {   
        errno: 0,
        data: {
            id: '1234',
            name: '张祥胜',
            total: 3567,
            consults: [
                {
                    patient_id: '13112448702',
                    disease: '宫颈癌',
                    effect: '非常满意',
                    attitude: '非常满意',
                    details: '百问不烦，特别细心。现在已经痊愈。'
                },
                ...
            ]
        }
    }

### 医生简介
    http://show.2qianwan.cn/app/v_patient/doctor_intro/?id=xxx

    {
        errno: 0,
        data: {
            id: '1234',
            name: '张祥胜',
            content: [
                {
                    type: 'text',
                    content: '张祥胜，现任北京xxx医院骨科医生'
                }
            ]
        }
    }

### 医生回复
    http://show.2qianwan.cn/app/v_patient/doctor_replies/?id=xxx

    {
        errno: 0,
        data: {
            title: '肩膀痛',
            date: '2015-12-12',
            description: 'xxxxx',
            advice: 'xxx'
        }
    }

### 诊所活动
    http://show.2qianwan.cn/app/v_patient/clinic_ads/?id=xxx

    {
        errno: 0,
        data: {
            id: '1234',
            name: '北京张祥胜中医诊所',
            ads: [
                {
                    id: '134',
                    title: '年底大酬宾'
                }
            ]
        }
    }

### 诊所活动详情
    http://show.2qianwan.cn/app/v_patient/clinic_ad_detail/?id=xxx&ad_id=xxx

    {
        errno: 0,
        data: {
            title: '年底大酬宾',
            content: [
                {
                    type: 'text',
                    content: '充1000送20'
                },
                ...
            ]
        }
    }

### 诊所收费
    http://show.2qianwan.cn/app/v_patient/clinic_billing/?id=xxx

    {
        errno: 0,
        data: {
            id: '1234',
            name: '北京张祥胜中医诊所',
            items: [
                {
                    name: '按摩',
                    price: '160元／小时'
                },
                ...
            ],
            note: '药费，手术费另收。'
        }
    }

### 健康讲堂
    http://show.2qianwan.cn/app/v_patient/healty_lecture/?id=xxx

    {
        errno: 0,
        data: [
            {
                id: 'xxx',
                title: '如何养胃',
                author: '张医生',
                date: '2016-01-01'
            }
        ]
    }

### 健康帖子详情
    http://show.2qianwan.cn/app/v_patient/healty_lecture/?id=xxx

    {
        errno: 0,
        data: {
            title: '标题',
            content: [
                {
                    type: 'text',
                    content: 'xxxxxxx'
                },
                ...
            ]
        }
        
    }

### 我的账户
    http://show.2qianwan.cn/app/v_patient/my_account/?id=xxx

    {
        errno: 0,
        data: {
            balance: 106,
            deals: [
                {
                    date: '2013-01-01',
                    title: '外诊',
                    id: '1234',
                    number: '-300'
                },
                ...
            ]
        }
    }

### 我的病例
    http://show.2qianwan.cn/app/v_patient/my_medical_cases/?id=xxx

    {
        errno: 0,
        data: {
            cases: [
                {
                    date: '2013-03-03',
                    id: '1234',
                    title: '耳朵发麻'
                },
                ...
            ]
        }
    }

### 我的医生
    http://show.2qianwan.cn/app/v_patient/my_doctors/?id=xxx

    {
        errno: 0,
        data: {
            doctors: [
                {
                    id: '1234',
                    name: '张祥胜',
                    clinic_name: '北京张祥胜中医诊所',
                    clinic_id: '4343',
                    date: '2013-04-04'
                },
                ...
            ]
        }
    }

### 我的诊所
    http://show.2qianwan.cn/app/v_patient/my_clinics/?id=xxx

    {
        errno: 0,
        data: {
            clinics: [
                {
                    id: '1234',
                    name: '北京张祥胜中医诊所',
                    date: '2013-04-04'
                }
            ]
        }
    }



