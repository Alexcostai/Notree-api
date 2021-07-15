const emails = [
    {code:"REGISTER_USER", text:"Thanks for registering!", subject:"Thanks for registering in Notree!"},
    {code:"RECOVER_PASSWORD", text:"Change of password! - Notree", subject:"You requested a password change!"},
];

function createEmailTextDao(){
    return {
        getByCode: (code) => {
            return emails.filter(t => t.code===code)[0]
        }
    }
}

export default createEmailTextDao