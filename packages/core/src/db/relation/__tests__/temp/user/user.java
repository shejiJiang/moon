package <%=packagePath%>;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;


/**
 * 用户信息表
 */
//@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@Table(name="user")
public class User {
    private static final long serialVersionUID = -8278190742410600860L;

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    @Column(name = "id")
    private String id;



    /*
     主键
     
    */
    @Column(name = "id")
    private string id;
  
    /*
     名字
     
    */
    @Column(name = "name")
    private string name;
  
}