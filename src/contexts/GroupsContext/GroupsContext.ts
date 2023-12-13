import { Group } from "@contexts/GroupsContext/GroupContextProps";
import { createContext } from "react";
import { GroupContextProps } from "./GroupContextProps";

export const GroupsContext = createContext<GroupContextProps>({
	groups: [],
	getGroup: () => returnDummyGroup(),
	createGroup: () => returnDummyGroup(),
	deleteGroup: () => returnDummyGroup(),
	updateGroup: () => returnDummyGroup(),
	addMember: () => returnDummyMember(),
	deleteMember: () => returnDummyMember(),
	updateMember: () => returnDummyMember(),
});

function returnDummyGroup(): Group {
	return {
		id: "",
		name: "",
		members: [],
	};
}

function returnDummyMember() {
	return {
		id: "",
		name: "",
	};
}