package net.fabiotecnico1.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import net.fabiotecnico1.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
