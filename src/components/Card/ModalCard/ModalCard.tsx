import React, { FC } from 'react';
import { Modal } from '../../Modal/Modal';
import { ListHeader } from '../../ListHeader/ListHeader';


interface ModalCard {
	toggleModal: () => void
	title?: string
	description?: string
	list?: string
}


export const ModalCard: FC<ModalCard> = ({ toggleModal, title = 'test', description = 'test', list, children }) => {
	return (
		<Modal className="modal-card" toggleModal={toggleModal}>
			<div>
				{title && <ListHeader titleValue={title} className="title"/>}
				{list && <span id="list">Dans la liste {list}</span>}
			</div>
			{description && <div>
                <h3 id="description-header">Description</h3>
                <p id="description">{description}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla nibh vel aliquam pretium.
                    eget auctor lorem libero non justo. Sed porttitor enim sed felis consequat, id malesuada nisi
                    interdum. Nulla bibendum risus ullamcorper risus ultrices dignissim. In hac habitasse platea
                    dictumst. Sed sed erat rutrum, dignissim nulla ut, porta nulla.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla nibh vel aliquam pretium.
                    eget auctor lorem libero non justo. Sed porttitor enim sed felis consequat, id malesuada nisi
                    interdum. Nulla bibendum risus ullamcorper risus ultrices dignissim. In hac habitasse platea
                    dictumst. Sed sed erat rutrum, dignissim nulla ut, porta nulla.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla nibh vel aliquam pretium.
                    eget auctor lorem libero non justo. Sed porttitor enim sed felis consequat, id malesuada nisi
                    interdum. Nulla bibendum risus ullamcorper risus ultrices dignissim. In hac habitasse platea
                    dictumst. Sed sed erat rutrum, dignissim nulla ut, porta nulla.

                    Vestibulum in lorem at arcu posuere mollis ut quis lorem. Proin massa odio, porttitor ornare dapibus
                    vel, finibus lacinia diam. Suspendisse rutrum pellentesque eros id molestie.
                </p>
                <p>
                    Pellentesque est nibh, rutrum in gravida vitae, consequat et massa. Fusce euismod tempus leo, eu
                    semper nisi sodales quis. Donec id aliquam lorem. In non lacinia tortor. Duis vitae arcu vel ipsum
                    hendrerit imperdiet vitae id nisi. Mauris sit amet faucibus nulla. Mauris felis orci, interdum vel
                    auctor ut, egestas nec nisl. Sed varius eros vitae erat pulvinar, egestas placerat purus hendrerit.
                    Cras volutpat nisi augue, quis ullamcorper lorem semper id. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Etiam ligula mauris, rutrum nec fermentum a, euismod quis dolor. Nullam quis tellus
                    hendrerit, vestibulum lacus sed, sodales nibh. Nulla a sem nec neque fringilla pellentesque. Etiam
                    eget condimentum nibh.
                </p>
                <p>
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Suspendisse et velit leo. Fusce id diam vel sapien pellentesque luctus. Mauris dictum porta nibh in
                    eleifend. Donec ut libero pulvinar, iaculis lacus sed, fermentum ante. Pellentesque blandit volutpat
                    mi, sed vestibulum tortor ultricies id. In iaculis, purus at condimentum varius, turpis dui interdum
                    risus, vel tristique erat purus quis est. Vivamus ante nulla, iaculis vitae laoreet eu, facilisis
                    dictum dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Mauris mattis ullamcorper velit, sed semper lectus varius at. Donec quis pulvinar quam.
                </p>
            </div>}
		</Modal>
	);
};