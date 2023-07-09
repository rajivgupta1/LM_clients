import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchBurrowAction } from "./burrowAction";

const BurrowHistory = () => {
  const dispatch = useDispatch();
  const { burrows } = useSelector((state) => state.burrowInfo);
  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    dispatch(fetchBurrowAction());
  }, [dispatch]);
  return (
    <UserLayout title="BurrowHistory">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Book Name</th>
            <th>Studnet Name</th>
            <th>Due Date</th>
            <th>Return Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {burrows.map((item, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>
                <img src={item.thumbnail} alt="" />
              </td>
              <td>{item.bookName}</td>
              <td>{item.userName}</td>
              <td>{item.dueDate.slice(0, 10)}</td>
              <td></td>
              <td>{item.userId === user._id && <Button>Return</Button>}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </UserLayout>
  );
};

export default BurrowHistory;