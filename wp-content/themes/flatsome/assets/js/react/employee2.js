"use strict";

console.log("tayo")
const root = document.getElementById("list_employee")

// const { exam_id, student_id, end_at, lock } = data.dataset
const url_root = "http://192.168.188.246:8000/api/"
const url_get_employees = url_root + "employees"

const lang = {
    DATA_PRIBADI: "DATA PRIBADI",
    TTL: "Tanggal Lahir",
    NAMA: "Nama",
    TEMPAT_LAHIR: "Tempat Lahir",
    JK: "Jenis Kelamin",
    AGAMA: "Agama",
    TINGGI_BADAN: "Tinggi Badan",
    STATUS: "Status",
    BERAT_BADAN: "Berat Badan",
    STATUS_KELUARGA: "STATUS KELUARGA",
    NO_TKA: "NO TKA",
    NAMA_AYAH: "Nama Ayah",
    NAMA_IBU: "Nama Ibu",

    UMUR: "Umur",
    Jumlah: "Jumlah",
    JUMLAH_ANAK: "Jumlah Anak",
    JUMLAH_SAUDARA_LAKI: "Jumlah Saudara Laki",
    JUMLAH_SAUDARA_PEREMPUAN: "Jumlah Saudara Perempuan",
    KAKAK: "Kakak",
    ADIK: "Adik",
    LAKI_LAKI: "Laki-Laki",
    PEREMPUAN: "Perempuan",

    NAMA_PASANGAN: "Nama Pasangan",
    ADIK: "Adik",
    TEMAN_SAUDARA: "Teman / Saudara",
    ADA: "ADA",
    TIDAK_ADA: "TIDAK ADA",
}

function FormGroup({ label, value }) {
    return (
        <div className="custom-form-group">
            <p className="custom-form-label">{label}</p>
            <p className="custom-form-value">{value}</p>
            {/* <input type="text" value={value} /> */}
        </div>
    )
}

function DetailBiodata({ data }) {
    return (
        <div className="custom-modal-list">
            <h2>{lang.DATA_PRIBADI}</h2>
            <hr />

            <div className="custom-form-wrapper">
                <FormGroup label={lang.NO_TKA} value={'152'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
                <FormGroup label={lang.NO_TKA} value={'123123'} />
            </div>

            <p>{JSON.stringify(data)}</p>
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
            <React.Fragment>Loading</React.Fragment>
        )
    }

    return (
        <div className="container">
            <h1>Kambing</h1>
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
