/** @type {import('payload/types').CollectionConfig} */
const PendaftaranLomba = {
    slug: "pendaftaran",
    access: {
      read: () => true,
      update: () => true,
      delete: () => true,
      create: () => true,
    },
    fields: [
      {
        name: "nama",
        type: "text",
        required: true,
      },
      {
        name: "email",
        type: "text",
        required: true,
        unique: true,
      },
      {
        name: "asal_sekolah",
        type: "text",
        required: true,
      },
      {
        name: "status",
        type: "select",
        options: ["Waiting", "Rejected", "Accepted"],
        defaultValue: "Waiting",
        required: true,
      },
      {
        name: "tanggal_pendaftaran",
        type: "date",
        admin: {
          date: {
            pickerAppearance: "dayOnly",
            displayFormat: "d MMM yyy",
          },
        },
        required: true,
      },
    ],
  };
  
  export default PendaftaranLomba;
  