"use strict";

console.log("tayo")
const root = document.getElementById("list_employee")

// const { exam_id, student_id, end_at, lock } = data.dataset
const url_root = "http://192.168.188.246:8000/api/"
const url_get_employees = url_root + "employees"

// const lang = {
//     DATA_PRIBADI: "DATA PRIBADI",
//     TTL: "Tanggal Lahir",
//     NAMA: "Nama",
//     TEMPAT_LAHIR: "Tempat Lahir",
//     JK: "Jenis Kelamin",
//     AGAMA: "Agama",
//     TINGGI_BADAN: "Tinggi Badan",
//     STATUS: "Status",
//     BERAT_BADAN: "Berat Badan",
//     STATUS_KELUARGA: "STATUS KELUARGA",
//     NO_TKA: "NO TKA",
//     NAMA_AYAH: "Nama Ayah",
//     NAMA_IBU: "Nama Ibu",
//     UMUR: "Umur",
//     Jumlah: "Jumlah",
//     JUMLAH_ANAK: "Jumlah Anak",
//     JUMLAH_SAUDARA_LAKI: "Jumlah Saudara Laki",
//     JUMLAH_SAUDARA_PEREMPUAN: "Jumlah Saudara Perempuan",
//     KAKAK: "Kakak",
//     ADIK: "Adik",
//     LAKI_LAKI: "Laki-Laki",
//     PEREMPUAN: "Perempuan",

//     NAMA_PASANGAN: "Nama Pasangan",
//     ADIK: "Adik",
//     TEMAN_SAUDARA: "Teman / Saudara",
//     ADA: "ADA",
//     TIDAK_ADA: "TIDAK ADA",

// }

function FormGroup({ label, value, value_multiple }) {
    return (
        <div className="custom-form-group">
            <p className="custom-form-label">{label}</p>
            {value && <p className="custom-form-value">{value}</p>}

            {value_multiple &&
                <div >
                    {value_multiple.map((d) => (
                        <div className="custom-form-multiplevalue">
                            <span className="custom-form-multiplevalue-label">
                                x{d.label}
                            </span>
                            <span className="custom-form-multiplevalue-value">
                                {d.value}
                            </span>
                        </div>

                    ))}
                </div>
            }
        </div>
    )
}

function FormCartaker({ data }) {
    return (
        <React.Fragment>
            <h2>基本資料 DATA PRIBADI - DIREKTORI FLATSOME</h2>
            <hr />
            <div className="custom-form-wrapper">
                <FormGroup label={"編號 No Biodata"} value={data.biodata_number || "-"} />
                <FormGroup label={"仲介/雇主 名稱 Nama Majikan/Agensi"} value={data.employer_name || "-"} />
                <FormGroup label={"姓名 Nama CTKW"} value={data.ctkw_name || "-"} />
                <FormGroup label={"中文姓名  Nama Mandarin *"} value={data.mandarin_name || "-"} />
                <FormGroup label={"性別 Jenis Kelamin *"} value={data.gender || "-"} />
                <FormGroup label={"生日 Tanggal Lahir *"} value={data.birth_date || "-"} />
                <FormGroup label={"出生地 Tempat Lahir *"} value={data.birth_place || "-"} />
                <FormGroup label={"身高CM Tinggi Badan *"} value={data.body_height || "-"} />
                <FormGroup label={"體重KG Berat Badan *"} value={data.body_weight || "-"} />
                <FormGroup label={"民族 Suku *"} value={data.ethnic || "-"} />
                <FormGroup label={"婚姻 Status"} value={data.marital_status_label || "-"} />
                <FormGroup label={"飲食 Makanan *"} value={data.food || "-"} />
                <FormGroup label={"是否去過台灣 Ex atau NON *"} value={data.desired_region || "-"} />
                <FormGroup label={"在台親友 Daerah Yang di Harapkan di Taiwan *"} value={data.is_ex || "-"} />
                <FormGroup label={"在台親友 Teman / Saudara Di Taiwan"} value={data.is_relative ? "Iya" : "Tidak"} />
                <FormGroup label={"在台親友 Daerah Yang di Harapkan di Taiwan *"} value={data.is_ex || "-"} />
                <FormGroup label={"關係 Hubungan"} value_multiple={[
                    {
                        label: "兄弟 Laki",
                        value: data.brother || "-"
                    },
                    {
                        label: "姊妹 Perempuan",
                        value: data.sister || "-"
                    }
                ]} />
            </div>

            <br />

            <h2>家庭狀況 STATUS KELUARGA</h2>
            <hr />
            <div className="custom-form-wrapper">
                <FormGroup label={"父親 Nama Ayah"} value={data.father_name || "-"} />
                <FormGroup label={"年齡 Umur"} value={data.father_age || "-"} />
                <FormGroup label={"手機 No Hp Ayah"} value={data.father_mobile_number || "-"} />
                <FormGroup label={"母親 Nama Ibu"} value={data.mother_name || "-"} />
                <FormGroup label={"年齡 Umur"} value={data.mother_age || "-"} />
                <FormGroup label={"手機 No Hp Ibu"} value={data.mother_mobile_number || "-"} />

                <FormGroup label={"配偶姓名 Nama Suami"} value={data.partner_name || "-"} />
                <FormGroup label={"年齡 Umur"} value={data.partner_age || "-"} />
                <FormGroup label={"手機 No Hp Suami"} value={data.partner_mobile_number || "-"} />
                <FormGroup label={"父亲的职业 Pekerjaan Ayah"} value={data.father_job || "-"} />
                <FormGroup label={"母亲的工作 Pekerjaan Ibu"} value={data.mother_job || "-"} />
                <FormGroup label={"丈夫的工作 Pekerjaan Suami"} value={data.partner_job || "-"} />
                <FormGroup label={"兄弟姐妹 Jumlah Saudara Kandung :"} value={data.biodata_number || "-"} />
                <FormGroup label={"家中排行 Saya Anak Ke"} value={data.biodata_number || "-"} />
                <FormGroup label={"孩子年齡 Umur Anak"} value={data.biodata_number || "-"} />
            </div>

            <h2>學歷、語言能力 KEMAMPUAN BAHASA DAN PENDIDIKAN</h2>
            <hr />
            <div className="custom-form-wrapper">
                <FormGroup label={"編號 No Biodata"} value={data.biodata_number || "-"} />
                <FormGroup label={"最高學歷 Pendidikan Tertinggi"} value={data.biodata_number || "-"} />
                <FormGroup label={"科系 Jurusan"} value={data.biodata_number || "-"} />
                <FormGroup label={"語言能力 Kemampuan Bahasa"} value={data.biodata_number || "-"} />
            </div>

            <h2>工作經驗 PENGALAMAN KERJA</h2>
            <hr />


            <h2>工作經驗 PENGALAMAN DI INDONESIA ATAU DI LUAR NEGERI</h2>
            <hr />
            <div className="custom-form-wrapper">
                <FormGroup label={"編號 No Biodata"} value={data.biodata_number || "-"} />
            </div>

            <h2>工作意願 KESEDIAAN BEKERJA DI LUAR NEGERI</h2>
            <hr />
            <div className="custom-form-wrapper">
            </div>

            <h2>評比結果 KOMENTAR INTERVIEWER DAN GURU</h2>
            <hr />
            <div className="custom-form-wrapper">
                <FormGroup label={"編號 No Biodata"} value={data.biodata_number || "-"} />
            </div>

        </React.Fragment>
    )
}


function FormFactory(data) {
}

function DetailBiodata({ data }) {
    return (
        <div className="custom-modal-list">
            <FormCartaker data={data} />
        </div>
    )
}

function ExamParticipant({ page, root_path }) {
    const [isLoading, setIsLoading] = React.useState(false)
    const [isLoadingDetail, setIsLoadingDetail] = React.useState(false)
    const [data, setData] = React.useState([])
    const [dataDetail, setDataDetail] = React.useState([])

    const icon_wa = `${root_path}/assets/img/icon/wa.png`
    const icon_wa_transparent = `${root_path}/assets/img/icon/wa_transparent.png`
    const icon_skype_transparent = `${root_path}/assets/img/icon/skype_transparent.png`

    const icon_skype = `${root_path}/assets/img/icon/skype.png`
    const icon_video = `${root_path}/assets/img/icon/video.png`

    const [isModalDetailShow, setIsModalDetailShow] = React.useState(false)

    const payload = () => {
        let _data = {}

        // sesuaikan dengan slug halaman
        if (page == "factory-woman") { // 
            _data = {
                gender: 2, // 
                type: 3
            }
        } else if (page == "factory-man") {
            _data = {
                gender: 1, // 
                type: 3
            }
        } else if (page == "nurse") {
            _data = {
                type: 2
            }
        } else if (page == "caretaker") {
            _data = {
                type: 1
            }
        }

        return _data
    }

    const openDetail = (employee_id) => {
        setIsModalDetailShow(true)
        loadEmployeeDetail(employee_id)
    }

    function FactoryEmployeeCard({ data }) {
        let name = data.name
        let tka = `NO. TKA ${data.tka_number}`

        if (page == "nurse") {
            name = data.ctkw_name
            tka = `NO. BIODATA ${data.biodata_number || '-'}`
        }

        if (page == "caretaker") {
            name = data.ctkw_name
            tka = `NO. BIODATA ${data.biodata_number || '-'}`
        }

        return (
            <React.Fragment>
                <div className="custom-card-header bg-danger">
                    <img src={data.image_path} />
                    <a className="icon-video"><img src={icon_video} /></a>
                </div>
                <div className="custom-card-body">
                    <p className="title">{name || "-"}</p>
                    <p className="description">{`${data.age} YEARS OLD`}</p>
                </div>
                <div className="custom-card-footer">
                    <a className="custom-card-badge" onClick={() => openDetail(data.id)}>Detail</a>
                    {/* <div className="custom-card-badge">{tka}</div> */}

                    {/* <div className="custom-card-footer-sosmed">
                        <a className="custom-icon custom-card-wa"><img src={icon_wa_transparent} /></a>
                        <a className="custom-icon custom-card-skype"><img src={icon_skype_transparent} /></a>
                    </div> */}
                </div>
            </React.Fragment>
        )
    }

    const loadEmployeeDetail = async (employee_id) => {
        if (!isLoadingDetail) {
            setIsLoadingDetail(true)

            const header = {
                headers: {
                    Authorization: 'qwerty123'
                },
                params: payload()
            }
            return axios.get(url_get_employees + "/" + employee_id, header)
                .then((res) => {
                    setIsLoadingDetail(false)
                    if (res.data.hasOwnProperty('data')) {
                        setDataDetail(res.data.data)
                    }
                })
        }
    }

    React.useEffect(() => {
        async function fetchData() {
            console.log("test")
            if (!isLoading) {
                setIsLoading(true)

                const header = {
                    headers: {
                        Authorization: 'qwerty123'
                    },
                    params: payload()
                }
                return axios.get(url_get_employees, header)
                    .then((res) => {
                        setIsLoading(false)
                        if (res.data.hasOwnProperty('data')) {
                            setData(res.data.data)
                        }
                    })
            }
        }

        fetchData()
        return () => {
            setIsLoading(false)
        };

    }, []);

    const HideModal = () => {
        setIsModalDetailShow(false)
    }

    if (isLoading) {
        return (
            <React.Fragment></React.Fragment>
        )
    }

    // return (
    //     <h1>INI REACT LAMA</h1>
    // )

    return (
        <div className="container">
            <div className="custom-modal" style={{ display: isModalDetailShow ? 'block' : 'none' }}>
                <div className="custom-modal-content" onClick={() => { }}>
                    {!isLoadingDetail ?
                        <DetailBiodata data={dataDetail} />
                        :
                        <p>Loading...</p>
                    }
                </div>
            </div>
            <div className="custom-card-container">
                {data.map((d, i) => (
                    <div className="custom-card" key={i}>
                        <FactoryEmployeeCard data={d} />
                    </div>
                ))}

                {data.length == 0 && (
                    <p>No Data</p>
                )}
            </div>
        </div>
    )
}


const rootInstance = ReactDOM.createRoot(root);
const { page, path } = root.dataset

rootInstance.render(<ExamParticipant page={page} root_path={path} />);
