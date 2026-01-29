import fs from "fs";

function createMember(memberId, name, membershipType) {
    try {
        let members = [];

        let ob = { memberId, name, membershipType };

        if (fs.existsSync("member.json")) {
            members = JSON.parse(fs.readFileSync("member.json", "utf-8"));

            let isMember = members.some(
                (value) => value.memberId === memberId
            );

            if (isMember) {
                return "Member already exists";
            }
        }

        members.push(ob);

        fs.writeFileSync(
            "member.json",
            JSON.stringify(members, null, 2)
        );

        return "Member created successfully";
    } catch (error) {
        console.log(error);
    }
}

export default createMember;
